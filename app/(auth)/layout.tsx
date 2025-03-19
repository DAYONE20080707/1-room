import Navigation from "@/components/ui/navigation/Navigation"
import Footer from "@/components/main/Footer"
import { getAuthUser } from "@/lib/nextauth"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const user = await getAuthUser()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation user={user} />
      <main className="flex-1 bg-gray-50 py-5 md:py-10 flex items-center justify-center mx-2">
        {children}
      </main>
      <Footer user={user} />
    </div>
  )
}

export default AuthLayout
