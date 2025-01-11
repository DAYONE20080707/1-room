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

      <ReasonItem
        title="豊富な実績と⾼い売主様満⾜度"
        highlights={["適正な査定価格がわからない", "手間をかけずに売却したい"]}
        description={`マンション買取歴25年以上で安心。
売りにくい物件の買取実績も豊富。`}
        detail="私たちは、これまで数多くの売却をサポートしてきました。売りにくいと言われた物件でも買取可能なケースが多くあります。独自のネットワークを活用し、スムーズな売却を実現します。"
        imageSrc="/reason/reason1.png"
      />
      <ReasonItem
        title="業界大手だからこその安心感"
        highlights={["売りにくい物件といわれてしまった", "早急に現金化したい"]}
        description="年間で1,000件以上の購入相談のお問い合わせをいただいています。"
        detail="業界大手として、多くの実績と信頼を誇ります。迅速な査定と現金化のサポートに加え、経験豊富な専門スタッフが最後まで安心してお任せいただける体制を整えています。"
        imageSrc="/reason/reason2.png"
      />
      <ReasonItem
        title="万全のサポート体制"
        highlights={[
          "何からはじめてよいかわからない",
          "売却時の費用について知りたい",
        ]}
        description="精通した営業担当者が対応するため、どのエリアでも安定のサービス"
        detail="売却のプロセスが初めての方でも安心していただけるよう、すべての手続きを丁寧にサポートいたします。費用や手続きに関する詳細な説明も含め、透明性の高い対応をお約束します。"
        imageSrc="/reason/reason3.png"
      />
    </div>
  )
}

export default Reason
