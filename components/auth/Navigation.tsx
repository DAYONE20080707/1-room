"use client"

import { User } from "@prisma/client"
// import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavigationProps {
  user: User | null
}

// ナビゲーション
const Navigation = ({ user }: NavigationProps) => {
  const pathname = usePathname()

  const backgroundClass = (() => {
    if (
      pathname.startsWith("/login") ||
      pathname.startsWith("/reset-password") ||
      pathname.startsWith("/signup") ||
      pathname.startsWith("/signup/admin") ||
      pathname.startsWith("/verify")
    ) {
      return "bg-gray-50"
    }
    return pathname === "/" ? "bg-primary" : "bg-secondary"
  })()

  return (
    <header className={`py-5 ${backgroundClass}`}>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="px-5 py-4 flex items-center justify-between bg-white rounded-lg shadow-md">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={180}
                height={36}
                priority={true}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <Link href="#reason" className="hidden md:block">選ばれる理由</Link>
            <Link href="#performance" className="hidden md:block">買取実績</Link>
            <Link href="#step" className="hidden md:block">売却の流れ</Link>
            <Link href="#blog" className="hidden md:block">お役立ち資料</Link>
            <Link href="#question" className="hidden md:block">よくある質問</Link>
            <div className="text-xs border-2 border-primary rounded px-3 py-1.5 cursor-pointer text-primary font-bold hover:bg-primary hover:text-white">
              <Link href="/" className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>お問い合わせ</span>
              </Link>
            </div>

            {user ? (
              <>
                <div className="text-xs border-2 border-primary text-primary font-bold rounded px-3 py-1.5 cursor-pointer hover:bg-primary hover:text-white">
                  {user.isAdmin ? (
                    <Link href="/admin">管理ページ</Link>
                  ) : (
                    <Link href="/member">マイページ</Link>
                  )}
                </div>
                {/* <div
                className="text-xs border border-primary text-primary font-bold rounded px-3 py-1.5 cursor-pointer hover:bg-primary hover:text-white"
                onClick={() => {
                  signOut({ callbackUrl: "/" })
                }}
              >
                ログアウト
              </div> */}
              </>
            ) : (
              <div className="text-xs border-2 border-primary text-primary font-bold rounded px-3 py-1.5 cursor-pointer hover:bg-primary hover:text-white">
                <Link href="/login">ログイン</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
