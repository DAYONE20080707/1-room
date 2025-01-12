"use client"

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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Satei2Schema } from "@/schemas"
import { useFormDataStore } from "@/hooks/useFormDataStore"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { createProject } from "@/actions/project"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"

const Satei2Form = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isLivingHere, setIsLivingHere] = useState(false)
  const {
    postCode,
    address1,
    blockNumber,
    buildingName,
    roomNumber,
    buildingArea,
    layout,
    buildingAge,
    propertyStatus,
  } = useFormDataStore()

  if (!postCode || !address1) {
    router.push("/")
  }

  const form = useForm<z.infer<typeof Satei2Schema>>({
    resolver: zodResolver(Satei2Schema),
    defaultValues: {
      name: "",
      furigana: "",
      tel: "",
      email: "",
      address2: "",
      contactMethod: "メール",
      requests: "",
    },
  })

  // 送信
  const onSubmit = async (values: z.infer<typeof Satei2Schema>) => {
    setIsLoading(true)

    try {
      // 査定申し込み
      const project = await createProject({
        ...values,
        postCode,
        address1,
        blockNumber,
        buildingName,
        roomNumber,
        buildingArea,
        layout,
        buildingAge,
        propertyStatus,
      })

      if (project) {
        setIsComplete(true)
        form.reset()
        toast.success("査定申し込みが完了しました")
      } else {
        toast.error("査定申し込みに失敗しました")
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("査定申し込みに失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white border-2 border-black rounded-lg p-3 md:p-10">
      {isComplete ? (
        <div className="text-center">
          <div className="font-bold text-xl mb-10">
            査定申し込みが完了しました
          </div>
          <div>査定には、数日かかる場合がございます。</div>
          <div>担当者がご連絡致しますので、しばらくお待ちください。</div>
        </div>
      ) : (
        <>
          <div className="text-center font-bold text-xl mb-10">
            査定のご連絡先について
            <br className="block md:hidden" />
            ご入力下さい
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex items-center">
                <div className="font-bold text-sm w-44">お名前</div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="査定 太郎" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">
                  お名前
                  <br className="block md:hidden" />
                  (フリガナ)
                </div>
                <FormField
                  control={form.control}
                  name="furigana"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="お名前(フリガナ)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">電話番号</div>
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="090-1234-5678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">メールアドレス</div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="taro@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">ご住所</div>
                <div className="w-full">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="livingHere"
                      checked={isLivingHere}
                      onCheckedChange={(checked) => {
                        setIsLivingHere(!!checked)
                        if (checked) {
                          form.setValue("address2", "")
                        }
                      }}
                    />
                    <FormLabel
                      htmlFor="livingHere"
                      className="font-bold text-xs"
                    >
                      査定物件に住んでいる場合はこちらにチェックをお願いします
                    </FormLabel>
                  </div>

                  <FormField
                    control={form.control}
                    name="address2"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="東京都目黒区2-2-2 202"
                            {...field}
                            disabled={isLivingHere}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">ご連絡方法</div>
                <FormField
                  control={form.control}
                  name="contactMethod"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-2"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="メール" />
                            </FormControl>
                            <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                              メール
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="電話" />
                            </FormControl>
                            <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                              電話
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center">
                <div className="font-bold text-sm w-44">
                  ご質問・
                  <br className="block md:hidden" />
                  ご要望など
                </div>
                <FormField
                  control={form.control}
                  name="requests"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder="ご自由にご記入ください"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4 w-full pt-5">
                <Button
                  type="submit"
                  className="w-full space-x-2 font-bold rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="animate-spin" />}
                  <span>無料査定送信 (2/2)</span>
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </div>
  )
}

export default Satei2Form
