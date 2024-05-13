import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import UserItem from "../user-item"
import { useState } from "react"
import { Button } from "../../ui/button"
import { ChevronsUpDown } from "lucide-react"
import { ScrollArea } from "../../ui/scroll-area"

export const SideBar = () => {
  return (

    <div className="flex flex-col gap-y-4 p-8 w-50 h-screen border-r">
      <UserItem />
      <ScrollArea >
        <div className="flex flex-col gap-y-2 font-semibold">
          <SideBarItem name="Programa" path="#" />

          <SideBarItemCollapsible name="Laboratorios" path="#" children={[
            {
              name: 'Web prácticas',
              path: '#'
            },
            {
              name: 'Prácticas',
              path: '#'
            },
            {
              name: 'Vídeo',
              path: '#'
            }
          ]} />

          <SideBarItemCollapsible name="Simuladores" path="#" children={[
            {
              name: 'Gramática',
              path: '#'
            },
            {
              name: 'Comprensión lectora',
              path: '#'
            },
            {
              name: 'Comprensión auditiva',
              path: '#'
            }
          ]} />

          <SideBarItemCollapsible name="Tu Progreso" path="#" children={[
            {
              name: 'Exámenes',
              path: '#'
            },
            {
              name: 'W-Reporting',
              path: '#'
            },
          ]} />

          <SideBarItem name="Optimus" path="#" />

          <SideBarItem name="Conversaciones interactivas" path="#" />

          <SideBarItemCollapsible name="Consultas" path="#" children={[
            {
              name: 'Buzón de consultas',
              path: '#'
            },
            {
              name: 'Ayuda',
              path: '#'
            },
          ]} />
        </div>
      </ScrollArea>
    </div >

  )
}

interface CollapsibleProps {
  name: string,
  path: string,
  children: { name: string, path: string }[]
}

const SideBarItemCollapsible = ({ name, path, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex flex-row gap-x-3 items-center">
          <SideBarItem name={name} path={path} />
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 ml-10">
          {
            children.map((item) => (
              <SideBarItem key={item.name} name={item.name} path={item.path} />
            ))
          }
        </CollapsibleContent>
      </Collapsible >
    </>
  )
}

interface Props {
  name: string,
  path: string,
}

const SideBarItem = ({ name, path }: Props) => {
  return (
    <a href={path} className="w-full">
      <div className="flex flex-row justify-between rounded-xl hover:bg-secondary/75 px-3 py-3">
        <p>{name}</p>
      </div>
    </a>
  )
}
