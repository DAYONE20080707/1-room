"use client"

import Image from "next/image"

const Step = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">不動産売却の流れ</div>
      <div className="font-bold text-2xl mb-10">かんたん00ステップで売却</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="space-y-10 col-span-1">
          <div className="flex items-center gap-5">
            <div className="font-bold text-3xl text-primary">・1</div>
            <div className="text-xl">売却査定依頼</div>
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <div className="font-bold text-3xl">・2</div>
            <div className="text-xl">査定結果ご報告</div>
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <div className="font-bold text-3xl">・3</div>
            <div className="text-xl">売買契約条件の調整・締結</div>
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <div className="font-bold text-3xl">・4</div>
            <div className="text-xl">決済・物件引き渡し</div>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src="/step.png"
            alt="ステップ"
            width={832}
            height={492}
            priority={false}
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Step
