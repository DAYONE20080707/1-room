'use client'

import Image from 'next/image'
import useStepAnimation from '@/hooks/useStepAnimation'
import TopStepCard from './TopStepCard'

const TopStepList = () => {
  // ステップアニメーションを適用
  useStepAnimation('.solution-card')

  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <section>
        <h2 className="text-primary text-xl mb-3">不動産売却の流れ</h2>
        <p className="font-bold text-2xl mb-10">かんたん00ステップで売却</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="solution-card">
            <TopStepCard
              stepNumber="Step 01"
              stepTitle="売却査定依頼"
              stepSubTitle="物件の詳細を元に査定を行います"
              stepBody="お客様の物件情報をもとに、専門家が迅速かつ正確に査定を行い、最適な価格をご提示します。"
            />
          </div>
          <div className="solution-card">
            <TopStepCard
              stepNumber="Step 02"
              stepTitle="査定結果ご報告"
              stepSubTitle="結果の詳細と次の流れをご説明します"
              stepBody="査定結果を分かりやすくご報告し、価格の根拠や今後の手続きについて丁寧にご説明いたします。"
            />
          </div>
          <div className="solution-card">
            <TopStepCard
              stepNumber="Step 03"
              stepTitle="売買契約条件の調整・締結"
              stepSubTitle="お客様の条件を反映した最適な契約を作成します"
              stepBody="売買契約条件の調整を行い、お客様のニーズに沿った契約を締結します。安心してご利用いただけます。"
            />
          </div>
          <div className="solution-card">
            <TopStepCard
              stepNumber="Step 04"
              stepTitle="決済・物件引き渡し"
              stepSubTitle="最後まで丁寧にサポートいたします"
              stepBody="決済完了後、物件の引き渡しを行います。全ての手続きがスムーズに進むようサポートいたします。"
            />
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
      </section>
    </div>
  )
}

export default TopStepList
