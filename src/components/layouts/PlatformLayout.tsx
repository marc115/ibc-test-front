interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col ">
            <div>PlatformLayout</div>
            {children}
        </div>
    )
}
