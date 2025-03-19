// components/ui/module/Breadcrumb.tsx

import Link from "next/link"
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  mainTitle: string
  parentDirectoryName?: string
  parentDirectoryLink?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  mainTitle,
  parentDirectoryName,
  parentDirectoryLink,
}) => {
  return (
    <div className=" text-xs md:text-sm mb-3 flex items-center space-x-1">
      <Link href="/" className=" hover:opacity-60 hover:text-blue-500">トップページ</Link>
      <ChevronRight className="w-4 h-4" />
      {parentDirectoryName && parentDirectoryLink && (
        <>
          <Link href={parentDirectoryLink} className=" hover:opacity-60 hover:text-blue-500">{parentDirectoryName}</Link>
          <ChevronRight className="w-4 h-4" />
        </>
      )}
      <div>{mainTitle}</div>
    </div>
  )
}

export default Breadcrumb
