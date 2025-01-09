"use client"

import { Project } from "@prisma/client"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import {
  negotiateProject,
  lostProject,
  receivedProject,
  lostDelivered,
} from "@/actions/project"
import { formatPostCode } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ProjectDetailProps {
  project: Project & { status: string }
  companyId: string
}

const ProjectDetail = ({ project, companyId }: ProjectDetailProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNegotiation = async () => {
    setIsLoading(true)

    try {
      // 紹介希望
      await negotiateProject({
        companyId,
        projectId: project.id,
        itemName: `${project.buildingName || project.address2}`,
      })

      toast.success("紹介希望しました、お客様にご連絡をお願いします")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("紹介希望に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleReceived = async () => {
    setIsLoading(true)

    try {
      await receivedProject({
        companyId,
        projectId: project.id,
      })
      toast.success("案件を受注しました")
      router.push("/member/project")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("案件の受注に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleLost = async () => {
    setIsLoading(true)

    try {
      await lostProject({
        companyId,
        projectId: project.id,
      })
      toast.success("案件を失注しました")
      router.push("/member/project")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("案件の失注に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelivered = async () => {
    setIsLoading(true)

    try {
      await lostDelivered({
        companyId,
        projectId: project.id,
      })
      toast.success("案件を納品しました")
      router.push("/member/project")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("案件の納品に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <table className="w-full border-collapse text-sm">
        <tbody>
          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              掲載日
            </th>
            <td className="p-2">
              {format(new Date(project.createdAt), "yyyy.MM.dd HH:mm")}
            </td>
          </tr>
          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              更新日
            </th>
            <td className="p-2">
              {format(new Date(project.updatedAt), "yyyy.MM.dd HH:mm")}
            </td>
          </tr>

          {project.status === "NEW" && (
            <tr>
              <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                掲載期日
              </th>
              <td className="p-2">
                {format(new Date(project.publishEndDate), "yyyy.MM.dd HH:mm")}
              </td>
            </tr>
          )}

          {project.status !== "NEW" && (
            <>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  名前
                </th>
                <td className="p-2">{project.name}</td>
              </tr>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  フリガナ
                </th>
                <td className="p-2">{project.furigana}</td>
              </tr>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  電話番号
                </th>
                <td className="p-2">{project.tel}</td>
              </tr>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  メール
                  <br className="block md:hidden" />
                  アドレス
                </th>
                <td className="p-2">{project.email}</td>
              </tr>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  住所
                </th>
                <td className="p-2">{project.address2 || project.address1}</td>
              </tr>
              <tr>
                <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
                  連絡方法
                </th>
                <td className="p-2">{project.contactMethod}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <div className="text-xl font-bold border-b border-black py-5 mb-5">
        物件情報
      </div>

      <table className="w-full border-collapse mb-10  text-sm">
        <tbody>
          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              建物名
            </th>
            <td className="p-2">{project.buildingName}</td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              建物住所
            </th>
            <td className="p-2">
              <div>{formatPostCode(project.postCode)}</div>
              <div>
                {project.address1}
                {project.blockNumber}
              </div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              部屋番号
            </th>
            <td className="p-2">
              <div>{project.roomNumber}</div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              建物(占有)面積
            </th>
            <td className="p-2">
              <div>{project.buildingArea}</div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              間取り
            </th>
            <td className="p-2">
              <div>{project.layout}</div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              築年数
            </th>
            <td className="p-2">
              <div>{project.buildingAge}</div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              物件の状況
            </th>
            <td className="p-2">
              <div>{project.propertyStatus}</div>
            </td>
          </tr>

          <tr>
            <th className="w-[80px] md:w-[200px] font-bold text-left p-2">
              意見・
              <br className="block md:hidden" />
              要望
            </th>
            <td className="p-2">{project.requests}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center justify-center space-x-5">
        {project.status === "NEW" ? (
          <Button
            className="w-full md:w-[200px] bg-yellow-500 hover:bg-yellow-500/90"
            onClick={handleNegotiation}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            <span>紹介希望</span>
          </Button>
        ) : project.status === "NEGOTIATION" ? (
          <>
            <Button
              className="w-full md:w-[200px] bg-green-500 hover:bg-green-500/90"
              onClick={handleReceived}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              <span>受注</span>
            </Button>
            <Button
              className="w-full md:w-[200px] bg-gray-500 hover:bg-gray-500/90"
              onClick={handleLost}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              <span>失注</span>
            </Button>
          </>
        ) : project.status === "RECEIVED" ? (
          <>
            <Button
              className="w-full md:w-[200px] bg-purple-500 hover:bg-purple-500/90"
              onClick={handleDelivered}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              <span>納品</span>
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
