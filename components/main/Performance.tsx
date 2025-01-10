"use client"

import PerformanceItem from "@/components/main/PerformanceItem"

const Performance = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">●●●●●●●●の買取実績</div>
      <div className="font-bold text-2xl mb-10">
        どんな物件も高額買取が可能
        <br />
        様々なエリアや築年数の実績多数
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <PerformanceItem key={item} />
        ))}
      </div>
    </div>
  )
}

export default Performance
