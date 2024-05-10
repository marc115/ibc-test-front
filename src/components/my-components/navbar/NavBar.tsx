import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"
import { navItems } from "@/constants/navbar-menu"
import navStyles from './navitem.module.css'


export default function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <MenuIcon />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link to={'/'} >
                        {/* <MountainIcon className="h-6 w-6" /> */}
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                            Home
                        </Link>
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                            About
                        </Link>
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                            Services
                        </Link>
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                            Portfolio
                        </Link>
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link className="mr-6 hidden" to="#">
                {/* <MountainIcon className="h-6 w-6" /> */}
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="lg:flex-row lg:flex">
                    {navItems.map((item) => (
                        <NavigationMenuItem>
                            <Link to={item.path}
                                className={navStyles.navitem}>
                                {item.name}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

function MenuIcon() {
    return (
        <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}