import '../css/frame_card.css'
interface FrameCardProps {
  className?: string
  children: React.ReactNode
}

export default function FrameCard({ children, className = "" }: FrameCardProps) {
  return (
    <article className={"relative" + className}>
      <div className="absolute top-full right-full w-20 aspect-square bg-black bg-gradient-base translate-x-1/2 -translate-y-1/2 -z-10 animated-bg-gradient-[10]"></div>
      <div className="absolute bottom-full left-full w-20 aspect-square bg-black bg-gradient-base -translate-x-1/2 translate-y-1/2 -z-10 animated-bg-gradient-[10]"></div>
      <main className="dark:bg-black/60 bg-purple-50 backdrop-blur-sm z-10 p-3">{children}</main>
    </article>
  )
}
