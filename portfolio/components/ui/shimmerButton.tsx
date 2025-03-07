import { s, span } from 'motion/react-client'
import React, { ReactNode } from 'react'


const ShimmerButton= ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
        // Button code
        <button className={`gap-2 md:w-50 md:mt-10 w-full rounded-md inline-flex h-12 animate-shimmer items-center justify-center border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors ${otherClasses}`}>
          {position == 'left' && icon}
          {title}
          {position == 'right' && icon}
        </button> 
        
  )
}

export default ShimmerButton

