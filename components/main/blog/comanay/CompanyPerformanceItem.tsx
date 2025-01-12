"use client"

import { Performance } from "@prisma/client"
import Image from "next/image"

interface CompanyPerformanceItemProps {
  performance: Performance
}

const CompanyPerformanceItem = ({
  performance,
}: CompanyPerformanceItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 text-sm">
      <div className="col-span-1">
        <div className="aspect-w-16 aspect-h-9 relative mb-5">
          <Image
            src={performance.imageUrl || "/noThumbnail.png"}
            alt="thumbnail"
            fill
            priority={false}
            className="rounded object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 space-y-2">
        <div className="font-bold text-xl">{performance.title}</div>
        <div>{performance.content}</div>

        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">買取価格</div>
          <div>{performance.price}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">建物名</div>
          <div>{performance.buildingName}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">建物住所</div>
          <div>{performance.address}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">対応業務</div>
          <div>{performance.work}</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyPerformanceItem
