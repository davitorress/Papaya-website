import { BadgeInfoIcon, CodeXmlIcon, CoffeeIcon, MenuIcon, XIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { twMerge } from "tailwind-merge"

import Button from "../ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [headerWhite, setHeaderWhite] = useState(false)

  const closeDialog = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderWhite(true)
      } else {
        setHeaderWhite(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={twMerge(
        "fixed z-40 w-full transition-colors duration-200 shadow-md",
        headerWhite ? "bg-white" : "bg-black/20"
      )}
    >
      <nav className="px-6 lg:px-16 py-4 size-full flex flex-row justify-between items-center gap-4 lg:gap-0">
        <img src="/papaya/logo-min.svg" alt="Papaya | Logo" className="h-14" />

        <ul className="hidden lg:flex flex-row gap-4">
          <li>
            <a href="#about">
              <Button theme="ghost-dark" className="text-lg" startIcon={<BadgeInfoIcon />}>
                Sobre
              </Button>
            </a>
          </li>
          <li>
            <a href="#activity">
              <Button theme="ghost-dark" className="text-lg" startIcon={<CoffeeIcon />}>
                Atividades
              </Button>
            </a>
          </li>
          <li>
            <a href="#project">
              <Button theme="ghost-dark" className="text-lg" startIcon={<CodeXmlIcon />}>
                Projeto
              </Button>
            </a>
          </li>
        </ul>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button theme="ghost-dark" className="text-lg lg:hidden">
              <MenuIcon />
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />

            <Dialog.Content className="fixed z-50 top-0 left-0 h-full w-80 bg-white shadow-lg pt-4 flex flex-col gap-7">
              <Dialog.Close className="absolute top-4 right-4">
                <Button theme="ghost-dark" className="text-lg p-0">
                  <XIcon />
                </Button>
              </Dialog.Close>

              <Dialog.Title className="px-3">
                <img src="/papaya/logo-min.svg" alt="Papaya | Logo" className="h-14" />
              </Dialog.Title>

              <hr className="border-t-2 border-black/10" />

              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#about">
                    <Button
                      theme="ghost-dark"
                      className="text-lg w-full rounded-none"
                      startIcon={<BadgeInfoIcon />}
                      onClick={closeDialog}
                    >
                      Sobre
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="#activity">
                    <Button
                      theme="ghost-dark"
                      className="text-lg w-full rounded-none"
                      startIcon={<CoffeeIcon />}
                      onClick={closeDialog}
                    >
                      Atividades
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="#project">
                    <Button
                      theme="ghost-dark"
                      className="text-lg w-full rounded-none"
                      startIcon={<CodeXmlIcon />}
                      onClick={closeDialog}
                    >
                      Projeto
                    </Button>
                  </a>
                </li>
              </ul>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  )
}
