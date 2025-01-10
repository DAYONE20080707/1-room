"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-10 w-full">
      <div className="flex justify-between text-gray-500 text-sm">
        <div className="space-y-3">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={180}
              height={36}
              priority={false}
            />
          </div>
          <div>企業名が入ります</div>
          <div>123-4567 東京都渋谷区xxxx</div>
          <div>
            <Image
              src="/sns/x.svg"
              alt="logo"
              width={40}
              height={40}
              priority={false}
            />
          </div>
        </div>
        <div className="space-y-3 text-right">
          <Button className="rounded">
            <Mail className="w-4 h-4 mr-2" />
            お問い合わせ
          </Button>
          <div>運営会社</div>
          <div>個人情報の取り扱いについて</div>
          <div>© ALL Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
