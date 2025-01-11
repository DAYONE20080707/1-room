"use client"

import NewsItem from "@/components/member/NewsItem"
import { useEffect, useState } from "react"
import { microcms } from "@/lib/microcms"
import { News } from "@/types"
import { Button } from "@/components/ui/button"

const News = () => {
  const [news, setNews] = useState<News[]>([])
  const [visibleNews, setVisibleNews] = useState<number>(3)

  useEffect(() => {
    const fn = async () => {
      const news = await microcms.getList({
        endpoint: "news",
        queries: {
          limit: 20,
          orders: "-publishedAt",
        },
        customRequestInit: {
          cache: "no-store",
        },
      })
      setNews(news.contents)
    }

    fn()
  }, [])

  const handleLoadMore = () => {
    setVisibleNews((prev) => prev + 4)
  }

  return (
    <div className="mb-10">
      {news.slice(0, visibleNews).map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}

      {visibleNews < news.length && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="w-40 rounded text-xs"
            onClick={handleLoadMore}
          >
            もっと見る
          </Button>
        </div>
      )}
    </div>
  )
}

export default News
