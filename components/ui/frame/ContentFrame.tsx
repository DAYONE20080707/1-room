// components/ui/frame/ContentFrame.tsx

import { FrameProps } from '@/types'

const ContentFrame = ({ children, className, id }: FrameProps) => {
  return (
    <div className={` w-11/12  md:w-[1200px] mx-auto md:px-0 ${className}`} id={id}>
      {children}
    </div>
  )
}

export default ContentFrame
