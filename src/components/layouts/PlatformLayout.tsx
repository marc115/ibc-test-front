import { SideBar } from "../custom/sidebar/sidebar"
import { Link } from "react-router-dom"
import { ScrollArea } from "../ui/scroll-area"
import { TopBar } from "../custom/topbar/topbar"

interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <div className="flex items-start justify-start">
            <SideBar />
            <div className="flex flex-col w-full h-screen">
                <ScrollArea className="flex flex-col flex-grow">
                    <TopBar />
                    {children}
                </ScrollArea>
                <footer className="flex bg-gray-700 h-7 justify-center items-center w-full">
                    <Link to={'../terms-and-conditions'} className="text-white">Términos, condiciones y políticas</Link>
                </footer>
            </div>

        </div >
    )
}
