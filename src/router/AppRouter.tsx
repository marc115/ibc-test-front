import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../modules"
import { DashboardPage } from "../modules/dashboard/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </>
    )
}
