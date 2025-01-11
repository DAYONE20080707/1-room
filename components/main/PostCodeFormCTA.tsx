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
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { fetchAddress } from "@/lib/utils"
import toast from "react-hot-toast"
import Image from "next/image"
import { Search } from "lucide-react"

const PostCodeFormCTA = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const setFormData = useFormDataStore((state) => state.setFormData)
  const clearFormData = useFormDataStore((state) => state.clearFormData)
  const form = useForm<z.infer<typeof PostCodeSchema>>({
    resolver: zodResolver(PostCodeSchema),
    defaultValues: {
      postCode1: "",
      postCode2: "",
    },
  })

  // 送信
  const onSubmit = async (values: z.infer<typeof PostCodeSchema>) => {
    setIsLoading(true)
    const postCode = `${values.postCode1}${values.postCode2}`
    const address = await fetchAddress(postCode)

    if (address) {
      clearFormData()
      setFormData({ postCode, address1: address })
      router.push(`/satei1`)
    } else {
      toast.error("無効な郵便番号です。正しい郵便番号を入力してください。")
    }
    setIsLoading(false)
  }

  return (
    <div className="bg-primary">
      <div className="px-3 max-w-screen-xl mx-auto py-10">
        <div className="bg-white px-5 md:px-20 py-10 rounded-xl border-4 border-black relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <Image
              src="/message.svg"
              alt="message"
              width={209}
              height={53}
              priority={true}
            />
          </div>

          <div className="font-bold text-2xl text-center mb-5">
            安心・実績の●●●●●●●●にお任せください！
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="max-w-screen-md mx-auto flex gap-5 items-start">
                <FormField
                  control={form.control}
                  name="postCode1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-center bg-secondary border-black rounded h-[44px]"
                          placeholder="000"
                          maxLength={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="font-bold text-center mt-2">-</div>

                <FormField
                  control={form.control}
                  name="postCode2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-center bg-secondary border-black rounded h-[44px]"
                          placeholder="0000"
                          maxLength={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-52">
                  <Button
                    type="submit"
                    className="w-full space-x-2 font-bold rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    無料査定スタート
                    <Search className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PostCodeFormCTA
