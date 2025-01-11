import { redirect } from "next/navigation"
import { getAuthUser } from "@/lib/nextauth"
import { getMyProjects } from "@/actions/project"
import ProjectItem from "@/components/member/ProjectItem"
import News from "@/components/member/News"

const MemberPage = async () => {
  const user = await getAuthUser()

  if (!user) {
    redirect("/")
  }

  if (!user.companyId) {
    redirect("/")
  }

  const projects = await getMyProjects({ companyId: user.companyId })

  return (
    <div className="bg-white md:border w-full rounded md:rounded-r-md p-2 md:p-10 h-full">
      <div className="text-xl font-bold border-b border-black pb-5 mb-5">
        お知らせ
      </div>

      <News />

      <div className="text-xl font-bold border-b border-black pb-5 mb-5">
        対応中物件
      </div>

      {projects.length === 0 ? (
        <div>対応中の物件はありません</div>
      ) : (
        projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))
      )}
    </div>
  )
}

export default MemberPage
