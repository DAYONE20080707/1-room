"use client"

import PerformanceItem from "@/components/main/PerformanceItem"
import { useEffect, useState } from "react"
import { microcms } from "@/lib/microcms"
import { CaseType } from "@/types"

const Performance = () => {
  const [cases, setCases] = useState<CaseType[]>([])

  useEffect(() => {
    const fn = async () => {
      const cases = await microcms.getList({
        endpoint: "cases",
        queries: {
          limit: 6,
          orders: "-publishedAt",
        },
        customRequestInit: {
          cache: "no-store",
        },
      })
      setCases(cases.contents)
    }

    fn()
  }, [])

  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">「カイトルONE」の買取実績</div>
      <div className="font-bold text-2xl mb-10">
        どんな物件も高額買取が可能
        <br />
        様々なエリアや築年数の実績多数
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cases.map((singleCase) => (
          <PerformanceItem key={singleCase.thumbnail.url} case={singleCase} />
        ))}
      </div>
    </div>
  )
}

export default Performance
