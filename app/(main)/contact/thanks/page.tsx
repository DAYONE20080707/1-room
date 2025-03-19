// app/(main)/contact/thanks/page.tsx

import Link from 'next/link'
import MainFrame from '@/components/ui/frame/SecondMainFrame'
import ContentFrame from '@/components/ui/frame/ContentFrame'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'コンセプト開発からクリエイティブまでブランディングをサポート！お問い合わせありがとうございます。',
  description:
    'この度は、お問い合わせありがとうございました。1営業日以内に担当者より、連絡を差し上げます。今しばらくお待ちくださいませ。',
  metadataBase: new URL('https://day-1.tokyo/'),
  openGraph: {
    title:
      'コンセプト開発からクリエイティブまでブランディングをサポート！お問い合わせありがとうございます。',
    description:
      'この度は、お問い合わせありがとうございました。1営業日以内に担当者より、連絡を差し上げます。今しばらくお待ちくださいませ。',
    url: 'https://day-1.tokyo/contact/thanks',
    images: [
      {
        url: '/static-image.png',
        width: 1200,
        height: 630,
        alt: '株式会社デイワンのイメージ画像',
      },
    ],
  },
}

const ThanksPage: React.FC = () => {
  return (
    <>
      <div className="md:w-[1200px] mx-auto  text-center md:mt-40">
        <ContentFrame className="text-center ">
          <p>お問い合わせいただき、ありがとうございます。</p>
          <h1 className="text-xl md:text-3xl font-bold mt-4">
            送信が完了しました！
          </h1>
          <h2 className=' text-base leading-[180%] md:leading-[180%] mt-8'>2営業日以内に担当者よりご連絡いたしますので<br />
          しばらくお待ちくださいませ。</h2>

          <Link
            href="/"
            className="  font-bold text-base flex justify-center mt-20"
          >
            TOPに戻る
          </Link>
        </ContentFrame>
      </div>
    </>
  )
}

export default ThanksPage
