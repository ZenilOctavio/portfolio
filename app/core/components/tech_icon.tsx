interface TechIconProps {
  href: string
  alt: string
  className?: string
  displayName?: string
}

export default function TechIcon({ href, className = "", displayName = "" }: TechIconProps) {
  return (
    <div className="relative group w-full h-full flex flex-col items-center my-2">
      <picture style={{
        backgroundImage: `url(${href})`,
        backgroundRepeat: "no-repeat",
      }} className={className + " image-shine w-full h-full grid p-2 animate-floating"}>
      </picture>
      {
        displayName &&
        <span
          className="absolute font-extralight left-1/2 -translate-x-1/2 transition-all opacity-0 top-full group-hover:opacity-100">
          {displayName}
        </span>
      }
    </div>
  )
}
