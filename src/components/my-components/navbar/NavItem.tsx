import { NavigationMenuLink, } from "@/components/ui/navigation-menu"
import { navItem } from "@/constants/navbar-menu"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"

interface Props {
    item: navItem
}

export const MenuItem = ({ item }: Props) => {
    return (
        <Link to={item.name}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md
                        px-4 py-2 font-medium transition-colors hover:bg-secondary/10 text-white 
                        disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 
                        data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 
                        dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                        dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
            {item.name}
        </Link>
    )
}


