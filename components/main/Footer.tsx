"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-10 w-full">
      <div className="flex justify-between text-gray-500 text-sm">
        <div className="space-y-3">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={36}
              priority={false}
            />
          </div>
          <p>株式会社デイワン</p>
          <p>107-0061 東京都港区北青山2-7-20</p>
          <p>猪瀬ビル2F</p>
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

          <div className=" hover:text-blue-500">
            <Link href="https://day-1.tokyo/">運営会社</Link>
          </div>

          <div>
            <Link href="https://day-1.tokyo/policy">
              個人情報の取り扱いについて
            </Link>{" "}
          </div>
          <div>© ALL Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
