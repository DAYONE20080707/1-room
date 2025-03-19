import Navigation from "@/components/ui/navigation/Navigation"
import Footer from "@/components/main/Footer"
import { getAuthUser } from "@/lib/nextauth"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  const user = await getAuthUser()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation user={user} />
      <main className="flex-1 bg-secondary">{children}</main>
      <Footer user={user}  />
    </div>
  )
}

export default MainLayout
