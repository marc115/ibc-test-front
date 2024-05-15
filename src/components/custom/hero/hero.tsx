interface Props {
    text: string
}

export const Hero = ({ text }: Props) => {
    return (
        <div className="flex min-h-80 items-center justify-center bg-gradient-to-b from-slate-50 to-orange-200 rounded-lg shadow-md">
            <h1 className="heading bg-gradient-to-r from-slate-900 to-sky-500 bg-clip-text text-transparent text-center">
                {text}
            </h1>
        </div>
    )
}
