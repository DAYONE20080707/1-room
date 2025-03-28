"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PerformanceSchema } from "@/schemas"
import { CloudUpload, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { editPerformance } from "@/actions/performance"
import { Performance } from "@prisma/client"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Image from "next/image"
import toast from "react-hot-toast"
import { WORK_OPTIONS } from "@/lib/utils"

interface PerformanceEditProps {
  performance: Performance
}

const PerformanceEdit = ({ performance }: PerformanceEditProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [imageUpload, setImageUpload] = useState<ImageListType>([
    {
      dataURL: performance.imageUrl || "/noImage.png",
    },
  ])

  const form = useForm<z.infer<typeof PerformanceSchema>>({
    resolver: zodResolver(PerformanceSchema),
    defaultValues: {
      title: performance.title,
      content: performance.content,
      price: performance.price || "",
      buildingName: performance.buildingName || "",
      address: performance.address || "",
      work: performance.work || "",
    },
  })

  // 送信
  const onSubmit = async (values: z.infer<typeof PerformanceSchema>) => {
    setIsLoading(true)

    try {
      let base64Image

      if (
        imageUpload[0].dataURL &&
        imageUpload[0].dataURL.startsWith("data:image")
      ) {
        base64Image = imageUpload[0].dataURL
      }

      // 実績編集
      const result = await editPerformance({
        id: performance.id,
        ...values,
        base64Image,
      })

      if (result) {
        form.reset()
        toast.success("実績を編集しました")
        router.push("/member/performance")
        router.refresh()
      } else {
        toast.error("実績の編集に失敗しました")
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("実績の編集に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  // 画像アップロード
  const onChangeImage = (imageList: ImageListType) => {
    const file = imageList[0]?.file
    const maxFileSize = 5 * 1024 * 1024

    // ファイルサイズチェック
    if (file && file.size > maxFileSize) {
      toast.error("ファイルサイズは5MBを超えることはできません")
      return
    }

    setImageUpload(imageList)
  }

  return (
    <div>
      <Form {...form}>
        <div>
          <FormLabel className="font-bold">サムネイル</FormLabel>
          <div className="mt-2">
            <ImageUploading
              value={imageUpload}
              onChange={onChangeImage}
              maxNumber={1}
              acceptType={["jpg", "png", "jpeg"]}
            >
              {({ imageList, onImageUpload, onImageUpdate, dragProps }) => (
                <div className="flex flex-col items-center justify-center space-y-3">
                  {imageList.length == 0 && (
                    <button
                      onClick={onImageUpload}
                      className="w-full md:w-[384px] h-[216px] border-2 border-dashed rounded hover:bg-gray-50"
                      {...dragProps}
                    >
                      <div className="text-gray-400 font-bold mb-2 text-sm">
                        ファイル選択または
                        <br />
                        ドラッグ＆ドロップ
                      </div>
                      <div className="text-gray-400 text-xs">
                        ファイル形式：jpg / jpeg / png
                      </div>
                      <div className="text-gray-400 text-xs">
                        ファイルサイズ：5MBまで
                      </div>
                    </button>
                  )}

                  {imageList.map((image, index) => (
                    <div key={index}>
                      {image.dataURL && (
                        <div className="relative group">
                          <Image
                            src={image.dataURL}
                            alt="image"
                            width={384}
                            height={216}
                            priority={true}
                          />

                          <div className="absolute top-2 right-2 flex space-x-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Button
                              variant="outline"
                              onClick={() => onImageUpdate(index)}
                              size="icon"
                              className="rounded-full"
                            >
                              <CloudUpload className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="年間50件の査定実績！" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">本文</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="当社は、迅速かつ丁寧な査定サービスを提供しています。"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">買取価格</FormLabel>
                <FormControl>
                  <Input placeholder="2500万円" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="buildingName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">建物名</FormLabel>
                <FormControl>
                  <Input placeholder="○○マンション芝公園" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">建物住所</FormLabel>
                <FormControl>
                  <Input placeholder="東京都港区芝公園3-5-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="work"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">対応業務</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="対応業務を選択してください" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {WORK_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4 w-full">
            <Button
              type="submit"
              className="w-full space-x-2 font-bold"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              <span>編集する</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PerformanceEdit
