// app/(main)/contact/page.tsx
import React from "react"
import Image from "next/image"
import ContcactForm from "@/components/main/contact/ContactForm"
import MainFrame from "@/components/ui/frame/MainFrame"
import SecondMainFrame from "@/components/ui/frame/SecondMainFrame"
import PageHeadline from "@/components/ui/text/PageHeadline"
import ContentFrame from "@/components/ui/frame/ContentFrame"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "コンセプト開発からクリエイティブまでブランディングをサポート！お問い合わせフォーム",
  description:
    "デイワンが提供するソリューション、サービスへのお問い合わせはフォームより、必要事項を入力の上送信をお願いいたします。",
  metadataBase: new URL("https://day-1.tokyo/"),
  openGraph: {
    title:
      "コンセプト開発からクリエイティブまでブランディングをサポート！お問い合わせフォーム",
    description:
      "デイワンが提供するソリューション、サービスへのお問い合わせはフォームより、必要事項を入力の上送信をお願いいたします。",
    url: "https://day-1.tokyo/contact",
    images: [
      {
        url: "/static-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社デイワンのイメージ画像",
      },
    ],
  },
}

const ContactPage: React.FC = () => {
  return (
    <>
      <MainFrame>
        <div className="">
          <PageHeadline mainTitle="お問い合わせ" subtitle="Contact" />
        </div>


          {/* <section className=" w-[650px]  mx-auto  px-5">
            <h2 className=" text-xl font-bold leading-normal mb-5 md:mb-7">
              詳しく知りたい方は
              <br />
              こちらからお問い合わせ
            </h2>
            <p className="text-base mt-4 mb-7">
              サービスを提供するだけではなく、
              共に走るパートナーとして真の価値を創造します。
              お気軽にお問い合わせください。
            </p>
          </section> */}
          <div className="px-5">
            <ContcactForm />
          </div>
     
      </MainFrame>
    </>
  )
}

export default ContactPage
