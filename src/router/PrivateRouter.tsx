import { Navigate } from "react-router-dom";
import { useLoginStore } from "@/modules/login/store/login.store"

interface Props {
    children: React.ReactNode
}

export const PrivateRouter = ({ children }: Props) => {
    const logged = useLoginStore((state) => state.logged);

    return (logged)
        ? children
        : <Navigate to={'/login'} />
}
