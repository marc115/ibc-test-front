import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Earth, MenuIcon, } from "lucide-react"
import { Link } from "react-router-dom"

import { navbarItems } from "@/constants/navbar-menu"
import UserItem from "../sidebar/user-item"

export const TopBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex h-20 xl:h-0 sticky top-0 w-full items-center justify-between px-4 md:px-6 
        border-b xl:border-none bg-gray-100/40 backdrop-blur-sm">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className="xl:hidden" variant="outline">
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-white" side="left">
                    
                    <nav className="grid gap-6 p-6">
                    <UserItem />
                        {
                            navbarItems.map((item) => (
                                <Link key={item.name} className="flex flex-row gap-x-2 text-lg font-medium hover:text-gray-600" 
                                    to={item.path}
                                    onClick={() => setOpen(false)}>
                                    <span className="flex-shrink-0">{item.icon}</span> {item.name}
                                </Link>
                            ))
                        }
                    </nav>
                </SheetContent>
            </Sheet>
            <a className="inline-flex items-center xl:hidden justify-center gap-x-2" href="welcome">
                <span className="font-familjen font-bold text-blue-500 text-5xl">IBC</span>
                <Earth className="size-7 text-orange-400" />
            </a>
        </header>
    )
}
