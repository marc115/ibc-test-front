interface Props {
    name: string,
    path: string,
    icon?: React.ReactNode
}

export const SideBarItem = ({ name, path, icon }: Props) => {
    return (
        <a href={path} className="w-full">
            <div className="flex flex-row justify-start gap-x-2 items-start rounded-xl hover:bg-secondary/75 px-3 py-3">
                {icon} <p>{name}</p>
            </div>
        </a>
    )
}