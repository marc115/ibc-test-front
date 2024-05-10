import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../modules"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { PlatformRouter } from "./PlatformRouter"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <PlatformRouter />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}
