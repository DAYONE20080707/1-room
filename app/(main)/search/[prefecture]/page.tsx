import { getCompaniesByPrefecture } from "@/actions/company"
import CompanySearchItem from "@/components/main/blog/comanay/CompanySearchItem"
import { prefectureMapping } from "@/lib/utils"

interface SearchPageProps {
  params: {
    prefecture: string
  }
}

const SearchPage = async ({ params }: SearchPageProps) => {
  const { prefecture } = params

  const companies = await getCompaniesByPrefecture({ prefecture })

  const prefectureKanji = prefectureMapping[prefecture]

  return (
    <div className="px-3 max-w-screen-lg mx-auto py-10">
      <div className="bg-white border-2 border-black rounded-lg p-3 md:p-10">
        <div className="flex items-end space-x-3 mb-5 md:mb-10">
          <div className="text-xl font-bold">
            {prefectureKanji}の査定会社の一覧
          </div>
          <div>{companies.length}件</div>
        </div>

        {companies.length === 0 ? (
          <div>査定会社が見つかりませんでした</div>
        ) : (
          companies.map((company) => (
            <CompanySearchItem key={company.id} company={company} />
          ))
        )}
      </div>
    </div>
  )
}

export default SearchPage
