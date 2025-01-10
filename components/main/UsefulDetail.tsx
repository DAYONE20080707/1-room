"use client"

import Image from "next/image"

const UsefulDetail = () => {
  return (
    <div className="px-3 max-w-screen-lg mx-auto py-10">
      <div className="bg-white border-2 border-black rounded-lg p-10">
        <div className="mb-5">
          <Image
            src="/step.png"
            alt="useful"
            width={1024}
            height={576}
            priority={true}
            className="rounded object-cover"
          />
        </div>

        <div className="space-y-2 col-span-2">
          <div className="text-sm">2025.01.01</div>
          <div className="border border-primary rounded-full text-primary text-xs px-2 py-0.5 w-32 text-center">
            ダミーカテゴリ
          </div>
          <div>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミー
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsefulDetail
