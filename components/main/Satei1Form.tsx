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
import { Satei1Schema } from "@/schemas"
import { useRouter } from "next/navigation"
import { useFormDataStore } from "@/hooks/useFormDataStore"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { formatPostCode } from "@/lib/utils"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const Satei1Form = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { postCode, address1 } = useFormDataStore()

  if (!postCode || !address1) {
    router.push("/")
  }

  const setFormData = useFormDataStore((state) => state.setFormData)
  const form = useForm<z.infer<typeof Satei1Schema>>({
    resolver: zodResolver(Satei1Schema),
    defaultValues: {
      blockNumber: "",
      buildingName: "",
      roomNumber: "",
      buildingArea: "",
      layout: "",
      buildingAge: "",
      propertyStatus: "空室",
    },
  })

  // 送信
  const onSubmit = async (values: z.infer<typeof Satei1Schema>) => {
    setIsLoading(true)
    setFormData({
      blockNumber: values.blockNumber,
      buildingName: values.buildingName,
      roomNumber: values.roomNumber,
      buildingArea: values.buildingArea,
      layout: values.layout,
      buildingAge: values.buildingAge,
      propertyStatus: values.propertyStatus,
    })
    router.push(`/satei2`)
    setIsLoading(false)
  }

  return (
    <div className="bg-white border-2 border-black rounded-lg p-3 md:p-10">
      <div className="text-center font-bold text-xl mb-10">
        お持ちの不動産について
        <br className="block md:hidden" />
        ご入力ください
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex items-center">
            <div className="font-bold text-sm w-40">郵便番号</div>
            <div className="w-full py-2 text-sm">
              {formatPostCode(postCode)}
            </div>
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">住所1</div>
            <div className="w-full py-2 text-sm">{address1}</div>
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">丁目 番地 号</div>
            <FormField
              control={form.control}
              name="blockNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="1-2-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">建物名</div>
            <FormField
              control={form.control}
              name="buildingName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="◯◯マンション" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">部屋番号</div>
            <FormField
              control={form.control}
              name="roomNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="101" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">建物(専有)面積</div>
            <FormField
              control={form.control}
              name="buildingArea"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="80m2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">間取り</div>
            <FormField
              control={form.control}
              name="layout"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="2LDK" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">築年数</div>
            <FormField
              control={form.control}
              name="buildingAge"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="2020" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center">
            <div className="font-bold text-sm w-40">物件の状況</div>
            <FormField
              control={form.control}
              name="propertyStatus"
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
          </div>

          <div className="space-y-4 w-full pt-5">
            <Button
              type="submit"
              className="w-full space-x-2 font-bold rounded-lg"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              次へ (1/2)
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Satei1Form
