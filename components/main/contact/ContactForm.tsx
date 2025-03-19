// components/contact/ContactForm.tsx

import React from 'react'
import Link from 'next/link'
import HubSpotContactForm from '@/components/main/contact/HubSpotContactForm'
import styles from '@/styles/contact.module.css'


const ContactForm: React.FC = () => {
  return (
    <>

        <section className=" md:flex justify-start pt-20 md:space-x-52">
          <div>
            <h2 className=" text-lg md:text-xl font-bold leading-normal mb-5 md:mb-7">
              詳しく知りたい方は
              <br />
              こちらからお問い合わせください。
            </h2>
            <p className=" text-sm md:text-base mt-4 mb-7">
              サービスを提供するだけではなく、
              <br />
              共に走るパートナーとして真の価値を創造します。
              <br />
              お気軽にお問い合わせください。
            </p>
            <p>
              ※協業、営業などのお問い合わせは、
              <Link href="/contact/sales" className="text-blue-600 font-bold">
                こちらへ
              </Link>
              お願いいたします。
            </p>
          </div>

          {/* <ContactForm headerText=""  /> */}
          <div className=" md:w-[500px]">
            <div className={styles.contact}>
              <HubSpotContactForm />
            </div>
            <p className=" text-[12px] md:text-xs mt-8">
              上記ボタンを押すことで、利用規約および、当社の提供するサービス等に関する情報を提供する目的で、
              株式会社デイワンが上記から送信された個人情報を保管・処理することに同意したものとみなされます。
              プライバシーポリシーをご覧ください。
            </p>
          </div>
        </section>
    
    </>
  )
}

export default ContactForm
