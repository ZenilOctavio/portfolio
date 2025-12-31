import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react"
import { useEffect, useState } from "react"


type ControlsKind = 'white' | 'dark'

interface CarrouselProps {
  className?: string
  imagesList: string[]
  autoScroll?: boolean
  scrollSeconds?: number
  controls?: ControlsKind
}


const controlsBackgroundClassNames: Record<ControlsKind, string> = {
  white: "bg-white/30",
  dark: "bg-slate-950/30"
}

const controlsClassNames: Record<ControlsKind, string> = {
  dark: "text-slate-950",
  white: "text-white"
}

const circleButtonsClassNames: Record<ControlsKind, string> = {
  dark: "text-black",
  white: "text-white"
}



export default function Carrousel({
  imagesList,
  className = "",
  autoScroll = false,
  scrollSeconds = 0,
  controls = 'dark'
}: CarrouselProps) {
  const [imageIndex, setImageIndex] = useState(1)

  useEffect(() => {
    if (autoScroll && scrollSeconds > 0) {
      const newScrollTimeOut = setTimeout(() => {
        const newImage = (imageIndex + 1) % imagesList.length
        setImageIndex(newImage)
      }, scrollSeconds * 1000)

      return () => {
        clearTimeout(newScrollTimeOut)
      }
    }
  }, [imageIndex])


  const controlsBackgroundClassName = controlsBackgroundClassNames[controls]
  const controlClassName = controlsClassNames[controls]
  const circleButtonClassName = circleButtonsClassNames[controls]

  return (
    <div className={"relative rounded group w-full h-full " + className}>
      <div style={{ backgroundImage: `url("${imagesList[imageIndex]}")` }} className="absolute top-0 left-0 h-full w-full blur-sm opacity-40"></div>
      <div className="h-full flex overflow-hidden">
        {imagesList.map((imageSrc, index) => {
          return (
            <img
              style={{ translate: `${-100 * imageIndex}%` }}
              key={index}
              className={`h-full rounded shrink-0 grow-0 w-full object-cover transition-transform duration-300`}
              src={imageSrc} />
          )
        })}
      </div>
      <button
        onClick={() => {
          setImageIndex(imageIndex - 1)
        }}
        disabled={imageIndex < 1}
        className={"absolute disabled:opacity-0 disabled:cursor-auto top-0 left-0 cursor-pointer transition-colors h-full " + controlsBackgroundClassName}>
        <ChevronLeft className={"group-hover:scale-105 transition-transform " + controlClassName} />
      </button>
      <button
        onClick={() => {
          setImageIndex(imageIndex + 1)
        }}
        disabled={imageIndex >= imagesList.length - 1}
        className={"absolute disabled:opacity-0 disabled:cursor-auto top-0 right-0 cursor-pointer transition-colors h-full " + controlsBackgroundClassName}>
        <ChevronRight className={"group-hover:scale-105 transition-transform " + controlClassName} />
      </button>

      <footer className={"absolute flex justify-center items-center pt-1 transition-colors w-full -translate-x-1/2 gap-1 overflow-hidden flex  bottom-0 left-1/2 group" + controlsBackgroundClassName}>
        <ul className="flex gap-1 translate-y-full group-hover:translate-y-0 transition-transform">
          {imagesList.map((_, index) => {
            return (
              <li key={index}>
                <button
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setImageIndex(index)
                  }}
                >
                  {
                    index == imageIndex ?
                      <CircleDot className={circleButtonClassName} />
                      :
                      <Circle className={circleButtonClassName} />
                  }
                </button>
              </li>
            )
          })}
        </ul>
      </footer>

    </div>
  )
}
