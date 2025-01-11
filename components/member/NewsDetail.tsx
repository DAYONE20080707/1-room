"use client"

import { News } from "@/types"
import { format } from "date-fns"

interface NewsDetailProps {
  news: News
}

const NewsDetail = ({ news }: NewsDetailProps) => {
  return (
    <div>
      <div className="text-sm">
        {format(new Date(news.publishedAt), "yyyy/MM/dd")}
      </div>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  )
}

export default NewsDetail
