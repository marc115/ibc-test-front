import Navbar from "../my-components/navbar/NavBar"

interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
        </div>
    )
}
