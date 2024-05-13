import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ListItem } from "../ui/nav-list-item"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"


interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <>
            <header className="flex flex-row px-5 py-4 bg-primary">
                <NavigationMenu className="">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Programa</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[100px] lg:w-[200px]">
                                    <ListItem href="#" title="Docs" />
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Laboratorios</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Simuladores</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tu Progreso</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Optimus</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Conversaciones Interactivas</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Consultas</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px]">
                                    <ListItem href="#" title="Docs" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                    
            </header>
            <div className="p-5">
                {children}
                
            </div>
        </>
    )
}
