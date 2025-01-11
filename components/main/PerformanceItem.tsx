"use client"

import { Case } from "@/types"
import Image from "next/image"

interface PerformanceItemProps {
  case: Case
}

const PerformanceItem = ({ case: singleCase }: PerformanceItemProps) => {
  return (
    <div className="border rounded-lg p-5 space-y-2">
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={singleCase.thumbnail?.url || "/noThumbnail.png"}
          alt="実績"
          fill
          priority={false}
          className="rounded object-cover"
        />
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">住所</div>
        <div className="font-bold">{singleCase.address}</div>
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">面積</div>
        <div>{singleCase.area}坪</div>
      </div>
      <div className="flex items-center">
        <div className="font-bold text-gray-400 w-20">築年数</div>
        <div>{singleCase.buildingYear}年</div>
      </div>
      <div className="flex items-end justify-end text-primary font-bold text-xl gap-1">
        <div>売却額</div>
        <div className="text-2xl">{singleCase.salesPrice.toLocaleString()}</div>
        <div>万円</div>
      </div>
      <hr />
      <div className="font-bold text-lg">{singleCase.title}</div>
      <div>{singleCase.content}</div>
    </div>
  )
}

export default PerformanceItem
