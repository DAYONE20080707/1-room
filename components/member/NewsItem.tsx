"use client"

import { NewsType } from "@/types"
import { format } from "date-fns"
import Link from "next/link"

interface NewsItemProps {
  news: NewsType
}

const NewsItem = ({ news }: NewsItemProps) => {
  return (
    <div className="border-b border-gray-300 pb-3 mb-3">
      <Link href={`/member/news/${news.id}`}>
        <div className="text-sm mb-2">
          {format(news.publishedAt, "yyyy/MM/dd")}
        </div>
        <div className="hover:underline">{news.title}</div>
      </Link>
    </div>
  )
}

export default NewsItem
