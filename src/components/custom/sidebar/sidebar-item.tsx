interface Props {
    name: string,
    path: string,
}

export const SideBarItem = ({ name, path }: Props) => {
    return (
        <a href={path} className="w-full">
            <div className="flex flex-row justify-between rounded-xl hover:bg-secondary/75 px-3 py-3">
                <p>{name}</p>
            </div>
        </a>
    )
}