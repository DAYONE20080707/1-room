"use client"

import { formatPostCode } from "@/lib/utils"
import { Project, ProjectStatus } from "@prisma/client"
import { format } from "date-fns"
import Link from "next/link"

interface ProjectItemProps {
  project: Project & {
    status: ProjectStatus
    projectUpdatedAt: Date | null
  }
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const getStatusLabel = (status: ProjectStatus) => {
    switch (status) {
      case "NEW":
        return { label: "新規相談", bgColor: "bg-sky-500" }
      case "NEGOTIATION":
        return { label: "商談中", bgColor: "bg-yellow-500" }
      case "REJECTED":
        return { label: "辞退", bgColor: "bg-red-500" }
      case "LOST":
        return { label: "失注", bgColor: "bg-gray-500" }
      case "RECEIVED":
        return { label: "受注", bgColor: "bg-green-500" }
      case "DELIVERED":
        return { label: "納品済み", bgColor: "bg-purple-500" }
      default:
        return { label: "不明", bgColor: "bg-gray-500" }
    }
  }

  const statusInfo = getStatusLabel(project.status)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 md:mb-5 border">
      <div className="md:border-r md:pr-5 p-5 space-y-2 col-span-1">
        <div
          className={`${statusInfo.bgColor} text-white text-center py-2 font-bold`}
        >
          {statusInfo.label}
        </div>
        <div className="text-sm">
          掲載日：{format(new Date(project.createdAt), "yyyy.MM.dd HH:mm")}
        </div>
        <div className="text-sm">
          更新日：{format(new Date(project.updatedAt), "yyyy.MM.dd HH:mm")}
        </div>

        {project.status === "NEW" ? (
          <div className="text-sm">
            掲載期日：
            {format(new Date(project.publishEndDate), "yyyy.MM.dd HH:mm")}
          </div>
        ) : project.status === "NEGOTIATION" ? (
          <div className="text-sm">
            商談開始日：
            {project.projectUpdatedAt &&
              format(new Date(project.projectUpdatedAt), "yyyy.MM.dd HH:mm")}
          </div>
        ) : project.status === "REJECTED" ? (
          <div className="text-sm">
            辞退日：
            {project.projectUpdatedAt &&
              format(new Date(project.projectUpdatedAt), "yyyy.MM.dd HH:mm")}
          </div>
        ) : project.status === "LOST" ? (
          <div className="text-sm">
            失注日：
            {project.projectUpdatedAt &&
              format(new Date(project.projectUpdatedAt), "yyyy.MM.dd HH:mm")}
          </div>
        ) : project.status === "RECEIVED" ? (
          <div className="text-sm">
            受注日：
            {project.projectUpdatedAt &&
              format(new Date(project.projectUpdatedAt), "yyyy.MM.dd HH:mm")}
          </div>
        ) : project.status === "DELIVERED" ? (
          <div className="text-sm">
            納品日：
            {project.projectUpdatedAt &&
              format(new Date(project.projectUpdatedAt), "yyyy.MM.dd HH:mm")}
          </div>
        ) : null}
      </div>

      <div className="p-5 col-span-2 space-y-3">
        <div className="border px-2 py-1 border-black inline-block text-sm font-bold">
          紹介
        </div>
        <div className="font-bold text-lg underline">
          <Link href={`/member/project/${project.id}`}>
            {project.buildingName || "建物名なし"}
          </Link>
        </div>
        <div>
          <div className="font-bold mb-1">紹介金額</div>
          <div>{project.referralFee.toLocaleString()}円</div>
        </div>
        <div>
          <div className="font-bold mb-1">建物住所</div>
          <div>
            <div>{formatPostCode(project.postCode)}</div>
            <div>
              {project.address1}
              {project.blockNumber} {project.roomNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
