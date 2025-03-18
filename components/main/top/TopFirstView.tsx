"use client"

import Image from "next/image"

const TopFirstView = () => {
  return (
    <div className="bg-primary pb-20">
      <div className="px-3 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white space-y-3 py-5">
          <div className="text-xl">1Rマンションの売却なら、まずは無料査定!</div>
          <div className="font-bold text-5xl">１番高い査定額がわかる</div>
          <div>
            1Rマンションの売却をお考えなら
            <br className="block md:hidden" />
            一括で査定を依頼する！
            <br />
            フォームに入力するだけで、かんたん1分で査定。
          </div>
        </div>
        <div>
          <Image
            src="/top-kv.png"
            alt="top"
            width={692}
            height={457}
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}

export default TopFirstView
