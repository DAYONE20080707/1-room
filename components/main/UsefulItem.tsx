"use client"

import Image from "next/image"
import Link from "next/link"

const UsefulItem = () => {
  return (
    <Link href="/useful/1">
      <div className="grid grid-cols-3 gap-3 pb-5 border-b">
        <div className="col-span-1">
          <Image
            src="/dummy2.png"
            alt="useful"
            width={180}
            height={130}
            priority={false}
            className="rounded object-cover"
          />
        </div>

        <div className="space-y-2 col-span-2">
          <div className="text-sm">2025.01.01</div>
          <div className="border border-primary rounded-full text-primary text-xs px-2 py-0.5 w-32 text-center">
            ダミーカテゴリ
          </div>
          <div>
            お知らせ内容はいりますお知らせ内容はいりますお知らせ内容はいりますお知らせ内容はいります
          </div>
        </div>
      </div>
    </Link>
  )
}

export default UsefulItem
