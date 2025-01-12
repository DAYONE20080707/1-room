import { getCompanyWithPerformanceById } from "@/actions/company"
import CompanyDetail from "@/components/main/CompanyDetail"

interface CompanyPageProps {
  params: {
    companyId: string
  }
}

const CompanyPage = async ({ params }: CompanyPageProps) => {
  const { companyId } = params

  const company = await getCompanyWithPerformanceById({ companyId })

  if (!company) {
    return <div className="text-center mt-10">会社が見つかりませんでした</div>
  }

  return (
    <div className="px-3 max-w-screen-lg mx-auto py-5 md:py-10">
      <div className="bg-white border-2 border-black rounded-lg p-3 md:p-10">
        <CompanyDetail company={company} />
      </div>
    </div>
  )
}

export default CompanyPage
