import { ScrollArea } from "@radix-ui/react-scroll-area"
import { SideBar } from "../custom/sidebar/sidebar"

interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <div className="flex items-start justify-start">
            <SideBar />
            <ScrollArea className="w-full h-screen">
                {children}
            </ScrollArea>
        </div >
    )
}
