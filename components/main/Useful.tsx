"use client"

import UsefulItem from "@/components/main/UsefulItem"
import { Button } from "@/components/ui/button"

const Useful = () => {
  return (
    <div className="bg-secondary">
      <div className="px-3 max-w-screen-xl mx-auto py-20">
        <div className="text-primary text-xl mb-3">お役立ち資料</div>
        <div className="font-bold text-2xl mb-10">
          役立つ資料で
          <br />
          よりスマートな1Rマンション売却を
        </div>

        <div className="bg-white rounded-lg p-5 md:p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <UsefulItem key={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="w-[600px] rounded">もっと見る</Button>
        </div>
      </div>
    </div>
  )
}

export default Useful
