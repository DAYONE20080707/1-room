"use client"

import { formatPostCode } from "@/lib/utils"
import { Project } from "@prisma/client"
import { format } from "date-fns"
import Link from "next/link"

interface ProjectAdminItemProps {
  project: Project & {
    referredCount: number
    receivedCompanies: {
      companyId: string
      companyName: string
    }[]
    negotiatingCompanies: {
      companyId: string
      companyName: string
    }[]
    deliveredCompanies: {
      companyId: string
      companyName: string
    }[]
  }
}

const ProjectAdminItem = ({ project }: ProjectAdminItemProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 md:gap-5 mb-5 border ${
        project.isReceived ? "bg-gray-50" : ""
      }`}
    >
      <div className="md:border-r md:pr-5 p-5 space-y-2 col-span-1">
        <div className="font-bold text-lg mb-5">
          紹介済み : {project.referredCount}/{project.maxReferrals}社
        </div>
        <div className="text-sm">
          掲載日：{format(new Date(project.createdAt), "yyyy.MM.dd HH:mm")}
        </div>
        <div className="text-sm">
          更新日：{format(new Date(project.updatedAt), "yyyy.MM.dd HH:mm")}
        </div>
        <div className="text-sm">
          掲載期日：
          {format(new Date(project.publishEndDate), "yyyy.MM.dd HH:mm")}
        </div>
      </div>

      <div className="p-5 col-span-2 space-y-3">
        {project.isReceived ? (
          <div className="border border-black px-2 py-1 inline-block text-sm font-bold bg-white">
            受注済み
          </div>
        ) : (
          <div
            className={`border px-2 py-1 inline-block text-sm font-bold ${
              project.isReferralAllowed
                ? "border-black"
                : "text-red-500 border-red-500"
            }`}
          >
            {project.isReferralAllowed ? "紹介中" : "未紹介"}
          </div>
        )}

        <div className="font-bold text-xl underline">
          <Link href={`/admin/project/${project.id}`}>
            {project.buildingName || "建物名なし"}
          </Link>
        </div>
        <div>
          <div className="font-bold mb-1">紹介金額</div>
          <div>{project.referralFee.toLocaleString()}円</div>
        </div>
        <div>
          <div className="font-bold mb-1">建物住所</div>
          <div>{formatPostCode(project.postCode)}</div>
          <div>
            {project.address1}
            {project.blockNumber} {project.roomNumber}
          </div>
        </div>

        {project.negotiatingCompanies.length > 0 && (
          <div>
            <div className="font-bold mb-1">紹介済み企業</div>
            {project.negotiatingCompanies.map((company) => (
              <div key={company.companyId} className="text-sm underline">
                <Link href={`/admin/company/${company.companyId}`}>
                  {company.companyName}
                </Link>
              </div>
            ))}
          </div>
        )}

        {project.receivedCompanies.length > 0 && (
          <div>
            <div className="font-bold mb-1">受注済み企業</div>
            {project.receivedCompanies.map((company) => (
              <div key={company.companyId} className="text-sm underline">
                <Link href={`/admin/company/${company.companyId}`}>
                  {company.companyName}
                </Link>
              </div>
            ))}
          </div>
        )}

        {project.deliveredCompanies.length > 0 && (
          <div>
            <div className="font-bold mb-1">納品済み企業</div>
            {project.deliveredCompanies.map((company) => (
              <div key={company.companyId} className="text-sm underline">
                <Link href={`/admin/company/${company.companyId}`}>
                  {company.companyName}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectAdminItem
