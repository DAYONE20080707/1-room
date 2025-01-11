import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projectPerPage = 20

export const SITE_NAME = "1Rマンション査定"

export const PREFECTURES = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
]

export const extractPrefecture = (address: string) => {
  const prefecture = PREFECTURES.find((pref) => address.startsWith(pref))
  return prefecture || null
}

export const prefectureMapping: { [key: string]: string } = {
  hokkaido: "北海道",
  aomori: "青森県",
  akita: "秋田県",
  yamagata: "山形県",
  iwate: "岩手県",
  miyagi: "宮城県",
  fukushima: "福島県",
  tokyo: "東京都",
  kanagawa: "神奈川県",
  saitama: "埼玉県",
  chiba: "千葉県",
  tochigi: "栃木県",
  ibaraki: "茨城県",
  gunma: "群馬県",
  aichi: "愛知県",
  gifu: "岐阜県",
  shizuoka: "静岡県",
  mie: "三重県",
  niigata: "新潟県",
  yamanashi: "山梨県",
  nagano: "長野県",
  ishikawa: "石川県",
  toyama: "富山県",
  fukui: "福井県",
  osaka: "大阪府",
  hyogo: "兵庫県",
  kyoto: "京都府",
  shiga: "滋賀県",
  nara: "奈良県",
  wakayama: "和歌山県",
  okayama: "岡山県",
  hiroshima: "広島県",
  tottori: "鳥取県",
  shimane: "島根県",
  yamaguchi: "山口県",
  kagawa: "香川県",
  tokushima: "徳島県",
  ehime: "愛媛県",
  kochi: "高知県",
  fukuoka: "福岡県",
  saga: "佐賀県",
  nagasaki: "長崎県",
  kumamoto: "熊本県",
  oita: "大分県",
  miyazaki: "宮崎県",
  kagoshima: "鹿児島県",
  okinawa: "沖縄県",
}

export const AREA_LIST = [
  {
    id: "1",
    label: "北海道",
  },
  {
    id: "2",
    label: "青森県",
  },
  {
    id: "3",
    label: "岩手県",
  },
  {
    id: "4",
    label: "宮城県",
  },
  {
    id: "5",
    label: "秋田県",
  },
  {
    id: "6",
    label: "山形県",
  },
  {
    id: "7",
    label: "福島県",
  },
  {
    id: "8",
    label: "茨城県",
  },
  {
    id: "9",
    label: "栃木県",
  },
  {
    id: "10",
    label: "群馬県",
  },
  {
    id: "11",
    label: "埼玉県",
  },
  {
    id: "12",
    label: "千葉県",
  },
  {
    id: "13",
    label: "東京都",
  },
  {
    id: "14",
    label: "神奈川県",
  },
  {
    id: "15",
    label: "新潟県",
  },
  {
    id: "16",
    label: "富山県",
  },
  {
    id: "17",
    label: "石川県",
  },
  {
    id: "18",
    label: "福井県",
  },
  {
    id: "19",
    label: "山梨県",
  },
  {
    id: "20",
    label: "長野県",
  },
  {
    id: "21",
    label: "岐阜県",
  },
  {
    id: "22",
    label: "静岡県",
  },
  {
    id: "23",
    label: "愛知県",
  },
  {
    id: "24",
    label: "三重県",
  },
  {
    id: "25",
    label: "滋賀県",
  },
  {
    id: "26",
    label: "京都府",
  },
  {
    id: "27",
    label: "大阪府",
  },
  {
    id: "28",
    label: "兵庫県",
  },
  {
    id: "29",
    label: "奈良県",
  },
  {
    id: "30",
    label: "和歌山県",
  },
  {
    id: "31",
    label: "鳥取県",
  },
  {
    id: "32",
    label: "島根県",
  },
  {
    id: "33",
    label: "岡山県",
  },
  {
    id: "34",
    label: "広島県",
  },
  {
    id: "35",
    label: "山口県",
  },
  {
    id: "36",
    label: "徳島県",
  },
  {
    id: "37",
    label: "香川県",
  },
  {
    id: "38",
    label: "愛媛県",
  },
  {
    id: "39",
    label: "高知県",
  },
  {
    id: "40",
    label: "福岡県",
  },
  {
    id: "41",
    label: "佐賀県",
  },
  {
    id: "42",
    label: "長崎県",
  },
  {
    id: "43",
    label: "熊本県",
  },
  {
    id: "44",
    label: "大分県",
  },
  {
    id: "45",
    label: "宮崎県",
  },
  {
    id: "46",
    label: "鹿児島県",
  },
  {
    id: "47",
    label: "沖縄県",
  },
] as const

export const formatPostCode = (code: string) => {
  if (code.length === 7) {
    return `〒${code.slice(0, 3)}-${code.slice(3)}`
  }
  return code
}

export const fetchAddress = async (postCode: string) => {
  try {
    const response = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`
    )
    const data = await response.json()

    if (data?.results && data.results.length > 0) {
      const result = data.results[0]
      return `${result.address1}${result.address2}${result.address3}`
    } else {
      return null
    }
  } catch (error) {
    console.error("住所検索中にエラーが発生しました:", error)
    return null
  }
}

export const WORK_OPTIONS = [
  "査定、買取",
  "賃貸管理",
  "リフォーム",
  "コンサルティング",
  "その他",
]

export const QUESTIONS = [
  {
    id: "1",
    question:
      "現在居住中です。売却が決まるとすぐに引っ越さなければなりませんか？",
    answer:
      "いいえ。お引渡しの日程については、お客様のご都合に合わせて柔軟に調整可能です。売却後も一定期間お住まいを続けるプランもご提案できますので、ご安心ください。",
  },
  {
    id: "2",
    question: "古い建物が建っています。そのままの状態で売却できますか？",
    answer:
      "はい。そのままの状態で売却可能です。古い建物やリフォームが必要な物件でも対応可能ですので、現状のままご相談ください。",
  },
  {
    id: "3",
    question: "遠方に住んでおり、何度も足を運ぶことができないのですが…",
    answer:
      "ご安心ください。オンラインや郵送での手続きを完了させることが可能です。必要に応じて営業担当者が現地に伺うこともできますので、遠方にお住まいの方でもスムーズに進められます。",
  },
  {
    id: "4",
    question: "査定を依頼すると必ず売らなければなりませんか？",
    answer:
      "いいえ。査定は無料で、売却の義務は一切ありません。査定結果をご確認いただき、納得いただいた場合にのみ売却手続きを進めていただけます。",
  },
  {
    id: "5",
    question: "買取可能なエリアは？",
    answer:
      "買取可能エリアは主に首都圏、大都市圏が中心ですが、エリア外の物件についてもご相談可能です。詳細はお気軽にお問い合わせください。",
  },
  {
    id: "6",
    question: "どのような物件が買取の対象となりますか？",
    answer:
      "一部屋のみのワンルームマンションからファミリー向けの広い物件まで、幅広く対応しています。築年数や状態にかかわらずご相談可能ですので、まずはお気軽にお問い合わせください。",
  },
]
