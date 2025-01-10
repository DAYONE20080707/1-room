"use client"

import { Performance } from "@prisma/client"
import { SquarePen, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { deletePerformanceById } from "@/actions/performance"
import toast from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"
import { WORK_OPTIONS } from "@/lib/utils"

interface PerformanceItemProps {
  performance: Performance
}

const PerformanceItem = ({ performance }: PerformanceItemProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    if (!window.confirm("実績を削除しますが、宜しいですか？")) {
      return
    }

    setIsLoading(true)

    try {
      // 実績削除
      await deletePerformanceById({
        performanceId: performance.id,
      })

      toast.success("実績を削除しました")
      router.push("/member/performance")
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("実績の削除に失敗しました")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 text-sm">
      <div className="col-span-1">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            fill
            src={performance.imageUrl || "/noThumbnail.png"}
            alt="thumbnail"
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="col-span-1 space-y-2">
        <div className="font-bold text-xl">{performance.title}</div>
        <div className="pb-3">{performance.content}</div>

        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">買取価格</div>
          <div>{performance.price}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">建物名</div>
          <div>{performance.buildingName}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">建物住所</div>
          <div>{performance.address}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold w-[100px]">対応業務</div>
          <div>
            {WORK_OPTIONS.find((option) => option.value === performance.work)
              ?.label || "未設定"}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Link href={`/member/performance/${performance.id}/edit`}>
            <div className="p-2">
              <SquarePen className="h-5 w-5" />
            </div>
          </Link>

          <button
            className="p-2 hover:text-red-500"
            onClick={handleDelete}
            disabled={isLoading}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PerformanceItem
