import { SideBar } from "../custom/sidebar/sidebar"

interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <div className="flex items-start justify-between">
            <SideBar />
            <div className="p-8">
                {children}
            </div>
        </div >
    )
}
