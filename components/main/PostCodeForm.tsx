"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PostCodeSchema } from "@/schemas"
import { useRouter } from "next/navigation"
import { useFormDataStore } from "@/hooks/useFormDataStore"

const PostCodeForm = () => {
  const router = useRouter()
  const setFormData = useFormDataStore((state) => state.setFormData)
  const clearFormData = useFormDataStore((state) => state.clearFormData)
  const form = useForm<z.infer<typeof PostCodeSchema>>({
    resolver: zodResolver(PostCodeSchema),
    defaultValues: {
      postCode1: "",
      postCode2: "",
    },
  })

  const fetchAddress = async (postCode: string) => {
    try {
      const response = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`
      )
      const data = await response.json()

      if (data?.results && data.results.length > 0) {
        const result = data.results[0]
        return `${result.address1}${result.address2}${result.address3}`
      } else {
        return null
      }
    } catch (error) {
      console.error("住所検索中にエラーが発生しました:", error)
      return null
    }
  }

  // 送信
  const onSubmit = async (values: z.infer<typeof PostCodeSchema>) => {
    const postCode = `${values.postCode1}${values.postCode2}`
    const address = await fetchAddress(postCode)

    if (address) {
      clearFormData()
      setFormData({ postCode, address1: address })
      router.push(`/satei1`)
    } else {
      alert("無効な郵便番号です。正しい郵便番号を入力してください。")
    }
  }

  return (
    <div className="bg-white p-5 rounded-lg border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm">郵便番号でマンション検索</div>

            <FormField
              control={form.control}
              name="postCode1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="000"
                      maxLength={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="font-bold">-</div>

            <FormField
              control={form.control}
              name="postCode2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="0000"
                      maxLength={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4 w-full">
            <Button
              type="submit"
              className="w-full space-x-2 font-bold rounded-lg"
            >
              無料査定スタート
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PostCodeForm
