"use client"

import Image from "next/image"

const Top = () => {
  return (
    <div className="bg-primary pb-20">
      <div className="px-3 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white space-y-3 py-5">
          <div className="text-xl">1Rマンション売却なら●●●●●●●●</div>
          <div className="font-bold text-5xl">無料買取査定</div>
          <div>
            1Rマンション売却をお考えなら
            <br className="block md:hidden" />
            まずは無料査定依頼！
            <br />
            フォームに入力するだけでかんたん1分で査定。
          </div>
        </div>
        <div>
          <Image
            src="/top.svg"
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

export default Top
