
import { BookUser, GraduationCap, Menu, ScanFace, SearchCode } from 'lucide-react'
import { useRef } from 'react'
const LINKS = [
  { href: '/#about-me', text: 'About me', icon: ScanFace },
  { href: '/#professional-experience', text: 'Professional Experience', icon: BookUser },
  { href: '/#academic-achievements', text: 'Academic Achievements', icon: GraduationCap },
  { href: '/#projects', text: 'Projects', icon: SearchCode },
]
export default function NavigationBar() {

  const menuInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <nav className="md:flex relative md:justify-end">

      <input id="menu" type="checkbox" className="hidden peer" ref={menuInputRef} />
      <label htmlFor="menu" className="block md:hidden">
        <Menu />
      </label>
      <ul className="h-0 opacity-0 -translate-y-100 peer-checked:translate-y-0 peer-checked:mt-5 peer-checked:mb-2 transition-all peer-checked:h-auto peer-checked:opacity-100 md:opacity-100 md:translate-y-0 md:h-auto basis-md flex md:flex-row flex-col gap-4 justify-between">
        {
          LINKS.map(link => {
            return (
              <li key={link.href}>
                <NavigationBarLink
                  onClick={() => {
                    if (menuInputRef.current) {
                      menuInputRef.current.checked = false
                    }
                  }}
                  href={link.href}
                >
                  <span>{<link.icon />}</span>
                  {link.text}
                </NavigationBarLink>
              </li>
            )
          })
        }
      </ul>
    </nav >
  )
}

interface NavigationBarLinkProps {
  children: React.ReactNode
  onClick?: () => any
  href: string
}

function NavigationBarLink({ children, href, onClick }: NavigationBarLinkProps) {
  return (
    <a
      className="flex gap-2 items-center text-sm text-nowrap font-light tracking-tight hover:underline"
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      href={href}
    >
      {children}
    </a>
  )
}
