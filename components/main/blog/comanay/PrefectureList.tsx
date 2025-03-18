import Link from "next/link"

const regions = [
  {
    name: "北海道・東北",
    prefectures: [
      { name: "北海道", path: "hokkaido" },
      { name: "青森県", path: "aomori" },
      { name: "秋田県", path: "akita" },
      { name: "山形県", path: "yamagata" },
      { name: "岩手県", path: "iwate" },
      { name: "宮城県", path: "miyagi" },
      { name: "福島県", path: "fukushima" },
    ],
  },
  {
    name: "関東",
    prefectures: [
      { name: "東京都", path: "tokyo" },
      { name: "神奈川県", path: "kanagawa" },
      { name: "埼玉県", path: "saitama" },
      { name: "千葉県", path: "chiba" },
      { name: "栃木県", path: "tochigi" },
      { name: "茨城県", path: "ibaraki" },
      { name: "群馬県", path: "gunma" },
    ],
  },
  {
    name: "中部",
    prefectures: [
      { name: "愛知県", path: "aichi" },
      { name: "岐阜県", path: "gifu" },
      { name: "静岡県", path: "shizuoka" },
      { name: "三重県", path: "mie" },
      { name: "新潟県", path: "niigata" },
      { name: "山梨県", path: "yamanashi" },
      { name: "長野県", path: "nagano" },
      { name: "石川県", path: "ishikawa" },
      { name: "富山県", path: "toyama" },
      { name: "福井県", path: "fukui" },
    ],
  },
  {
    name: "関西",
    prefectures: [
      { name: "大阪府", path: "osaka" },
      { name: "兵庫県", path: "hyogo" },
      { name: "京都府", path: "kyoto" },
      { name: "滋賀県", path: "shiga" },
      { name: "奈良県", path: "nara" },
      { name: "和歌山県", path: "wakayama" },
    ],
  },
  {
    name: "中国・四国",
    prefectures: [
      { name: "岡山県", path: "okayama" },
      { name: "広島県", path: "hiroshima" },
      { name: "鳥取県", path: "tottori" },
      { name: "島根県", path: "shimane" },
      { name: "山口県", path: "yamaguchi" },
      { name: "香川県", path: "kagawa" },
      { name: "徳島県", path: "tokushima" },
      { name: "愛媛県", path: "ehime" },
      { name: "高知県", path: "kochi" },
    ],
  },
  {
    name: "九州・沖縄",
    prefectures: [
      { name: "福岡県", path: "fukuoka" },
      { name: "佐賀県", path: "saga" },
      { name: "長崎県", path: "nagasaki" },
      { name: "熊本県", path: "kumamoto" },
      { name: "大分県", path: "oita" },
      { name: "宮崎県", path: "miyazaki" },
      { name: "鹿児島県", path: "kagoshima" },
      { name: "沖縄県", path: "okinawa" },
    ],
  },
]

type PrefectureListProps = {
  getCompanyCount: (prefecture: string) => string
}

const PrefectureList = ({ getCompanyCount }: PrefectureListProps) => {
  return (
    <div>
      {regions.map((region) => (
        <div key={region.name} className="mb-10">
          <div className="mb-3 font-bold">{region.name}</div>
          <div className="md:flex md:items-center md:space-x-3 md:flex-wrap grid grid-cols-4 gap-1">
            {region.prefectures.map((prefecture, index) => (
              <div key={prefecture.name} className="flex items-center">
                <Link
                  href={`/search/${prefecture.path}`}
                  className="underline hover:text-primary"
                >
                  {prefecture.name}
                </Link>
                <span className="ml-1">{getCompanyCount(prefecture.name)}</span>
                {index < region.prefectures.length - 1 && (
                  <div className="hidden md:block mx-1">|</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrefectureList
