// components/ui/frame/MainFrame.tsx
import { FrameProps } from '@/types'

const MainFrame = ({ children }: FrameProps) => {
  return <article className="bg-[#EBE9E8] ">{children}</article>
}

export default MainFrame
