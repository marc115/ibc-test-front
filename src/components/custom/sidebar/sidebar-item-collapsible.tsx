import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { SideBarItem } from "./sidebar-item"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown, } from "lucide-react"

interface Props {
    name: string,
    path: string,
    icon?: React.ReactNode,
    children?: { name: string, path: string, icon?: React.ReactNode}[]
}

export const SideBarItemCollapsible = ({ name, path, icon, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full space-y-2">
                <div className="flex flex-row gap-x-3 items-center">
                    <SideBarItem name={name} path={path} icon={icon} />
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 ml-10">
                    {
                        children?.map((item) => (
                            <SideBarItem key={item.name} name={item.name} path={item.path} />
                        ))
                    }
                </CollapsibleContent>
            </Collapsible >
        </>
    )
}


