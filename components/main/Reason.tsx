"use client"

import ReasonItem from "./ReasonItem"

const Reason = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">●●●●●●●●が選ばれる理由</div>
      <div className="font-bold text-2xl mb-10">
        マンション売却時の
        <br />
        お悩みを解決いたします
      </div>

      <ReasonItem />
      <ReasonItem />
      <ReasonItem />
    </div>
  )
}

export default Reason
