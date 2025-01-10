"use client"

import Image from "next/image"

const PerformanceItem = () => {
  return (
    <div className="border rounded-lg p-5 space-y-2">
      <div>
        <Image
          src="/dummy1.png"
          alt="実績"
          width={384}
          height={216}
          priority={false}
          className="rounded object-cover"
        />
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">エリア</div>
        <div>東京都渋谷区</div>
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">面積</div>
        <div>100坪</div>
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">築年数</div>
        <div>1990年</div>
      </div>
      <div className="flex items-end justify-end text-primary font-bold text-xl gap-1">
        <div>売却額</div>
        <div className="text-2xl">3,000</div>
        <div>万円</div>
      </div>
      <hr />
      <div className="font-bold text-lg">下取りより60万円高く売れた！</div>
      <div>
        テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。
      </div>
    </div>
  )
}

export default PerformanceItem
