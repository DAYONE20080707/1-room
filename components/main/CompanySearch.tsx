"use client"

import { getCompanyCountByPrefecture } from "@/actions/company"
import Link from "next/link"
import { useEffect, useState } from "react"

const CompanySearch = () => {
  const [companyCounts, setCompanyCounts] = useState<
    { prefecture: string | null; count: number }[]
  >([])

  useEffect(() => {
    const fn = async () => {
      const companyCounts = await getCompanyCountByPrefecture()
      setCompanyCounts(companyCounts)
    }

    fn()
  }, [])

  const getCompanyCount = (prefecture: string) => {
    const countObj = companyCounts.find(
      (item) => item.prefecture === prefecture
    )
    return countObj ? `(${countObj.count})` : ""
  }

  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">査定会社を探す</div>
      <div className="font-bold text-2xl mb-10">地域から査定会社を探す</div>

      {/* 北海道・東北 */}
      <div className="mb-3 font-bold">北海道・東北</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link
            href="/search/hokkaido"
            className="underline hover:text-primary"
          >
            北海道
          </Link>
          <span className="ml-1">{getCompanyCount("北海道")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/aomori" className="underline hover:text-primary">
            青森県
          </Link>
          <span className="ml-1">{getCompanyCount("青森県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/akita" className="underline hover:text-primary">
            秋田県
          </Link>
          <span className="ml-1">{getCompanyCount("秋田県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/yamagata"
            className="underline hover:text-primary"
          >
            山形県
          </Link>
          <span className="ml-1">{getCompanyCount("山形県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/iwate" className="underline hover:text-primary">
            岩手県
          </Link>
          <span className="ml-1">{getCompanyCount("岩手県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/miyagi" className="underline hover:text-primary">
            宮城県
          </Link>
          <span className="ml-1">{getCompanyCount("宮城県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/fukushima"
            className="underline hover:text-primary"
          >
            福島県
          </Link>
          <span className="ml-1">{getCompanyCount("福島県")}</span>
        </div>
      </div>

      {/* 関東 */}
      <div className="mb-3 font-bold">関東</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link href="/search/tokyo" className="underline hover:text-primary">
            東京都
          </Link>
          <span className="ml-1">{getCompanyCount("東京都")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/kanagawa"
            className="underline hover:text-primary"
          >
            神奈川県
          </Link>
          <span className="ml-1">{getCompanyCount("神奈川県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/saitama" className="underline hover:text-primary">
            埼玉県
          </Link>
          <span className="ml-1">{getCompanyCount("埼玉県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/chiba" className="underline hover:text-primary">
            千葉県
          </Link>
          <span className="ml-1">{getCompanyCount("千葉県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/tochigi" className="underline hover:text-primary">
            栃木県
          </Link>
          <span className="ml-1">{getCompanyCount("栃木県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/ibaraki" className="underline hover:text-primary">
            茨城県
          </Link>
          <span className="ml-1">{getCompanyCount("茨城県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/gunma" className="underline hover:text-primary">
            群馬県
          </Link>
          <span className="ml-1">{getCompanyCount("群馬県")}</span>
        </div>
      </div>

      {/* 中部 */}
      <div className="mb-3 font-bold">中部</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link href="/search/aichi" className="underline hover:text-primary">
            愛知県
          </Link>
          <span className="ml-1">{getCompanyCount("愛知県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/gifu" className="underline hover:text-primary">
            岐阜県
          </Link>
          <span className="ml-1">{getCompanyCount("岐阜県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/shizuoka"
            className="underline hover:text-primary"
          >
            静岡県
          </Link>
          <span className="ml-1">{getCompanyCount("静岡県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/mie" className="underline hover:text-primary">
            三重県
          </Link>
          <span className="ml-1">{getCompanyCount("三重県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/niigata" className="underline hover:text-primary">
            新潟県
          </Link>
          <span className="ml-1">{getCompanyCount("新潟県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/yamanashi"
            className="underline hover:text-primary"
          >
            山梨県
          </Link>
          <span className="ml-1">{getCompanyCount("山梨県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/nagano" className="underline hover:text-primary">
            長野県
          </Link>
          <span className="ml-1">{getCompanyCount("長野県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/ishikawa"
            className="underline hover:text-primary"
          >
            石川県
          </Link>
          <span className="ml-1">{getCompanyCount("石川県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/toyama" className="underline hover:text-primary">
            富山県
          </Link>
          <span className="ml-1">{getCompanyCount("富山県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/fukui" className="underline hover:text-primary">
            福井県
          </Link>
          <span className="ml-1">{getCompanyCount("福井県")}</span>
        </div>
      </div>

      {/* 関西 */}
      <div className="mb-3 font-bold">関西</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link href="/search/osaka" className="underline hover:text-primary">
            大阪府
          </Link>
          <span className="ml-1">{getCompanyCount("大阪府")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/hyogo" className="underline hover:text-primary">
            兵庫県
          </Link>
          <span className="ml-1">{getCompanyCount("兵庫県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/kyoto" className="underline hover:text-primary">
            京都府
          </Link>
          <span className="ml-1">{getCompanyCount("京都府")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/shiga" className="underline hover:text-primary">
            滋賀県
          </Link>
          <span className="ml-1">{getCompanyCount("滋賀県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/nara" className="underline hover:text-primary">
            奈良県
          </Link>
          <span className="ml-1">{getCompanyCount("奈良県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/wakayama"
            className="underline hover:text-primary"
          >
            和歌山県
          </Link>
          <span className="ml-1">{getCompanyCount("和歌山県")}</span>
        </div>
      </div>

      {/* 中国・四国 */}
      <div className="mb-3 font-bold">中国・四国</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link href="/search/okayama" className="underline hover:text-primary">
            岡山県
          </Link>
          <span className="ml-1">{getCompanyCount("岡山県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/hiroshima"
            className="underline hover:text-primary"
          >
            広島県
          </Link>
          <span className="ml-1">{getCompanyCount("広島県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/tottori" className="underline hover:text-primary">
            鳥取県
          </Link>
          <span className="ml-1">{getCompanyCount("鳥取県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/shimane" className="underline hover:text-primary">
            島根県
          </Link>
          <span className="ml-1">{getCompanyCount("島根県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/yamaguchi"
            className="underline hover:text-primary"
          >
            山口県
          </Link>
          <span className="ml-1">{getCompanyCount("山口県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/kagawa" className="underline hover:text-primary">
            香川県
          </Link>
          <span className="ml-1">{getCompanyCount("香川県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/tokushima"
            className="underline hover:text-primary"
          >
            徳島県
          </Link>
          <span className="ml-1">{getCompanyCount("徳島県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/ehime" className="underline hover:text-primary">
            愛媛県
          </Link>
          <span className="ml-1">{getCompanyCount("愛媛県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/kochi" className="underline hover:text-primary">
            高知県
          </Link>
          <span className="ml-1">{getCompanyCount("高知県")}</span>
        </div>
      </div>

      {/* 九州・沖縄 */}
      <div className="mb-3 font-bold">九州・沖縄</div>
      <div className="md:flex md:items-center md:space-x-3 mb-5 md:flex-wrap grid grid-cols-4 gap-1">
        <div>
          <Link href="/search/fukuoka" className="underline hover:text-primary">
            福岡県
          </Link>
          <span className="ml-1">{getCompanyCount("福岡県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/saga" className="underline hover:text-primary">
            佐賀県
          </Link>
          <span className="ml-1">{getCompanyCount("佐賀県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/nagasaki"
            className="underline hover:text-primary"
          >
            長崎県
          </Link>
          <span className="ml-1">{getCompanyCount("長崎県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/kumamoto"
            className="underline hover:text-primary"
          >
            熊本県
          </Link>
          <span className="ml-1">{getCompanyCount("熊本県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/oita" className="underline hover:text-primary">
            大分県
          </Link>
          <span className="ml-1">{getCompanyCount("大分県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/miyazaki"
            className="underline hover:text-primary"
          >
            宮崎県
          </Link>
          <span className="ml-1">{getCompanyCount("宮崎県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link
            href="/search/kagoshima"
            className="underline hover:text-primary"
          >
            鹿児島県
          </Link>
          <span className="ml-1">{getCompanyCount("鹿児島県")}</span>
        </div>
        <div className="hidden md:block">|</div>
        <div>
          <Link href="/search/okinawa" className="underline hover:text-primary">
            沖縄県
          </Link>
          <span className="ml-1">{getCompanyCount("沖縄県")}</span>
        </div>
      </div>
    </div>
  )
}

export default CompanySearch
