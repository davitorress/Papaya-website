import { BadgeInfoIcon, CodeXmlIcon, CoffeeIcon } from "lucide-react"
import Button from "../ui/button"

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-black/20">
      <nav className="px-16 py-4 size-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <img src="/papaya/logo-min.svg" alt="Papaya | Logo" className="h-14" />

        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <a href="#about">
              <Button className="text-lg" startIcon={<BadgeInfoIcon />}>
                Sobre
              </Button>
            </a>
          </li>
          <li>
            <a href="#activity">
              <Button className="text-lg" startIcon={<CoffeeIcon />}>
                Atividades
              </Button>
            </a>
          </li>
          <li>
            <a href="#project">
              <Button className="text-lg" startIcon={<CodeXmlIcon />}>
                Projeto
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
