// components/ui/text/ContentHeadline.tsx

import React from 'react'
import Image from 'next/image'
import { TextProps } from '@/types'

const ContentHeadline: React.FC<TextProps> = ({
  title,
  subTitle,
  number,
  body,
  imageSrc,
  titleElement: TitleTag = 'h2',
  subTitleElement: SubTitleTag = 'h6',
  numberElement: NumberTag = 'span',
  bodyElement: BodyTag = 'p',
}) => (
  <>
    <div className=" w-full">
      {/* サブタイトル */}
      <SubTitleTag className="font-ebGaramond text-2xl md:text-4xl  italic font-bold">
        {subTitle}
      </SubTitleTag>

      {/* タイトル */}
      <TitleTag className=" text-base md:text-xl font-bold mt-2">{title}</TitleTag>

      {/* 画像の表示 */}
      {typeof imageSrc === 'string' && (
        <div className="mt-4">
          <Image
            src={imageSrc}
            alt={typeof title === 'string' ? title : 'イメージ画像'} // 必ず文字列を渡す
            width={236}
            height={200}
            className="rounded-lg"
            style={{ width: '236', height: '200' }} // アスペクト比を維持

          />
        </div>
      )}

      {/* 本文 */}
      {body && (
        <BodyTag className="font-semibold md:w-[500px] leading-7">
          {body}
        </BodyTag>
      )}
    </div>
  </>
)

export default ContentHeadline
