import { useEffect, useState } from "react"

interface TypingAnimatedTextProps {
  children: string
  duration: number
  delay?: number
}

export default function TypingAnimatedText({ children, duration, delay = 0 }: TypingAnimatedTextProps) {
  const [index, setIndex] = useState(0)
  const [delayed, setDelayed] = useState(delay <= 0)
  const stepLength = duration * 1000 / children.length

  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => setDelayed(true), delay * 1000)
    }
    
  }, [])

  useEffect(() => {
    if (!delayed) {
      return
    }

    let interval = setInterval(() => {
      if (index === children.length) return clearInterval(interval)
      setIndex(index + 1)
    }, stepLength)
    return () => clearInterval(interval)
  }, [index, delayed])

  if (!delayed) return null

  return (
    <p>{children.substring(0, index)} {index == children.length ? '' : <span className="blinking"></span>}</p>
  )
}