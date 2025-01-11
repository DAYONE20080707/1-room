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
import { AREA_LIST, extractPrefecture } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ProjectSchema } from "@/schemas"
import { Loader2, CalendarIcon } from "lucide-react"
import { Project } from "@prisma/client"
import { useRouter } from "next/navigation"
import { editProject } from "@/actions/project"
import { Switch } from "@/components/ui/switch"
import { ja } from "date-fns/locale"
import toast from "react-hot-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ProjectAdminDetailProps {
  project: Project
}

const ProjectAdminDetail = ({ project }: ProjectAdminDetailProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isLivingHere, setIsLivingHere] = useState(!project.address2)

  const prefecture = extractPrefecture(project.address1)

  // エリアリストの初期値設定
  const initialAreaList = prefecture
    ? AREA_LIST.filter((item) =>
        (project.area || prefecture).split("、").includes(item.label)
      ).map((item) => item.id)
    : []

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      name: project.name,
      furigana: project.furigana,
      tel: project.tel,
      email: project.email,
      address2: project.address2 || "",
      contactMethod: project.contactMethod,
      requests: project.requests || "",
      memo: project.memo || "",
      postCode: project.postCode,
      address1: project.address1,
      blockNumber: project.blockNumber,
      buildingName: project.buildingName || "",
      roomNumber: project.roomNumber || "",
      buildingArea: project.buildingArea,
      layout: project.layout,
      buildingAge: project.buildingAge,
      propertyStatus: project.propertyStatus,
      areaList: initialAreaList,
      referralFee: project.referralFee,
      maxReferrals: project.maxReferrals,
      isReferralAllowed: project.isReferralAllowed,
      publishEndDate: new Date(project.publishEndDate),
    },
  })

  // 送信
  const onSubmit = async (values: z.infer<typeof ProjectSchema>) => {
    setIsLoading(true)

    try {
      const sortedAreaList = values.areaList
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map((id) => {
          const productType = AREA_LIST.find((item) => item.id === id)
          return productType ? productType.label : ""
        })
        .filter((label) => label !== "")

      const area = sortedAreaList.join("、")

      // 案件情報編集
      await editProject({
        ...values,
        id: project.id,
        area,
      })

      toast.success("案件情報を編集しました")
      router.push("/admin")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("案件情報の編集に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  // 全選択
  const selectAll = () => {
    form.setValue(
      "areaList",
      AREA_LIST.map((item) => item.id)
    )
  }

  // 全チェックを外す
  const deselectAll = () => {
    form.setValue("areaList", [])
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="isReferralAllowed"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-5">
              <FormLabel className="font-bold">紹介可否</FormLabel>
              <FormControl>
                <div>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-5 mb-2">
          <FormField
            control={form.control}
            name="referralFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">紹介金額(円)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="30000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxReferrals"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">紹介数(社)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="3"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="publishEndDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">掲載期日</FormLabel>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px]",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: ja })
                        ) : (
                          <span>日付を選択</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      locale={ja}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="areaList"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">紹介エリア</FormLabel>
              <div className="flex items-center space-x-2 mb-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={selectAll}
                  className="py-2"
                >
                  全選択
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={deselectAll}
                  className="py-2"
                >
                  全選択解除
                </Button>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-9 gap-1 md:gap-3">
                {AREA_LIST.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="areaList"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="space-x-1 flex items-end"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="font-bold text-xl pt-5">物件情報</div>

        <FormField
          control={form.control}
          name="postCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">郵便番号</FormLabel>
              <FormControl>
                <Input placeholder="000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">住所1</FormLabel>
              <FormControl>
                <Input placeholder="東京都目黒区" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="blockNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">丁目 番地 号</FormLabel>
              <FormControl>
                <Input placeholder="1-2-4" {...field} />
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
                <Input placeholder="◯◯マンション" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roomNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">部屋番号</FormLabel>
              <FormControl>
                <Input placeholder="101" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="buildingArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">建物(占有)面積</FormLabel>
              <FormControl>
                <Input placeholder="80m2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="layout"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">間取り</FormLabel>
              <FormControl>
                <Input placeholder="2LDK" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="buildingAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">築年数</FormLabel>
              <FormControl>
                <Input placeholder="2020" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="propertyStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">物件の状況</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-2"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="空室" />
                    </FormControl>
                    <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                      空室
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="居住中" />
                    </FormControl>
                    <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                      居住中
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="賃貸中" />
                    </FormControl>
                    <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                      賃貸中
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="font-bold text-xl pt-5">査定のご連絡先</div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">お名前</FormLabel>
              <FormControl>
                <Input placeholder="査定 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="furigana"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">お名前(フリガナ)</FormLabel>
              <FormControl>
                <Input placeholder="サテイ タロウ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">電話番号</FormLabel>
              <FormControl>
                <Input placeholder="090-1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" placeholder="taro@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="font-bold text-sm">ご住所</div>

        <div className="flex items-center space-x-2">
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
          <FormLabel htmlFor="livingHere" className="font-bold text-xs">
            査定物件に住んでいる場合はこちらにチェックをお願いします
          </FormLabel>
        </div>

        <FormField
          control={form.control}
          name="address2"
          render={({ field }) => (
            <FormItem>
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

        <FormField
          control={form.control}
          name="contactMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">ご希望連絡方法</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-2"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="電話" />
                    </FormControl>
                    <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                      電話
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="メール" />
                    </FormControl>
                    <FormLabel className="text-sm font-bold pb-2 cursor-pointer">
                      メール
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">ご質問・ご要望など</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="ご自由にご記入ください"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="memo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">メモ</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="管理者用メモをご記入してください"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full font-bold" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          編集する
        </Button>
      </form>
    </Form>
  )
}

export default ProjectAdminDetail
