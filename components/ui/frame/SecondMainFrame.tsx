// components/ui/frame/SecondMainFrame.tsx
import { FrameProps } from '@/types'

const SecondMainFrame = ({ children, className = '' }: FrameProps) => {
  return (
    <div className={` w-full bg-[#EBE9E8]  ${className}`}>
      {children}
    </div>
  )
}

export default SecondMainFrame
