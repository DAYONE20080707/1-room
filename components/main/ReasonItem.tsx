"use client"

import Image from "next/image"

const ReasonItem = () => {
  return (
    <div className="bg-white rounded-lg p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
      <div>
        <div className="font-bold mb-10 text-lg">
          豊富な実績と⾼い売主様満⾜度
        </div>
        <div className="bg-accent relative mb-5 rounded-lg">
          <div className="absolute -top-7 left-5">
            <Image
              src="/reasonCharacter.svg"
              alt="character"
              width={111}
              height={123}
              priority={false}
            />
          </div>
          <div className="font-bold py-6 ml-36">
            <div>・適正な査定価格がわからない</div>
            <div>・手間をかけずに売却したい</div>
          </div>
        </div>

        <div className="font-bold mb-3">
          マンション買取歴25年以上で安心。
          <br />
          売りにくい物件の買取実績も豊富。
        </div>

        <div>
          テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/reason1.png"
          alt="reason"
          width={440}
          height={378}
          priority={false}
          className="rounded object-cover"
        />
      </div>
    </div>
  )
}

export default ReasonItem
