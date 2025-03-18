"use client"

import { getCompanyCountByPrefecture } from "@/actions/company"
import { useEffect, useState } from "react"
import PrefectureList from "./PrefectureList"

const CompanySearch = () => {
  const [companyCounts, setCompanyCounts] = useState<
    { prefecture: string | null; count: number }[]
  >([])

  useEffect(() => {
    const fetchCompanyCounts = async () => {
      const counts = await getCompanyCountByPrefecture()
      setCompanyCounts(counts)
    }

    fetchCompanyCounts()
  }, [])

  const getCompanyCount = (prefecture: string) => {
    const countObj = companyCounts.find(
      (item) => item.prefecture === prefecture
    )
    return countObj ? `(${countObj.count})` : ""
  }

  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">査定会社を探す</div>
      <div className="font-bold text-2xl mb-10">地域から査定会社を探す</div>
      <PrefectureList getCompanyCount={getCompanyCount} />
    </div>
  )
}

export default CompanySearch
