"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import LinkButton from "../ui/button/LinkButton"
import { User } from "@prisma/client"

interface FooterProps {
  user: User | null
}

const Footer = ({ user }: FooterProps) => {
  return (
    <div className="w-full px-3 max-w-screen-xl mx-auto py-10 border-t">
      <div className="flex justify-between text-gray-500 text-sm">
        <div className="space-y-3">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={180}
                height={36}
                priority={false}
              />
            </Link>
          </div>
          <p>株式会社デイワン</p>
          <p>107-0061 東京都港区北青山2-7-20</p>
          <p>猪瀬ビル2F</p>
          <div>
            <Image
              src="/sns/x.svg"
              alt="logo"
              width={40}
              height={40}
              priority={false}
            />
          </div>
        </div>

        <div className="space-y-3 text-right ">
          {/* 認証部分を追加 */}
          {user ? (
            <div className="text-xs text-center border-2 border-primary text-primary font-bold rounded cursor-pointer hover:bg-primary hover:text-white py-2 px-4">
              {user.isAdmin ? (
                <Link href="/admin" className="w-full">
                  管理ページ
                </Link>
              ) : (
                <Link href="/member" className="w-full">
                  マイページ
                </Link>
              )}
            </div>
          ) : (
            <div className="text-xs text-center border-2 border-primary text-primary font-bold rounded cursor-pointer hover:bg-primary hover:text-white py-2 px-4">
              <Link href="/login" className="w-full">
                ログイン
              </Link>
            </div>
          )}

          <LinkButton
            href="/contact"
            className="flex justify-center items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            お問い合わせ
          </LinkButton>

          <div className="hover:text-blue-500">
            <Link href="https://day-1.tokyo/">運営会社</Link>
          </div>
          <div>
            <Link href="https://day-1.tokyo/policy">
              個人情報の取り扱いについて
            </Link>
          </div>
          <div>© ALL Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
