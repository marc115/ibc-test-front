import { Route, Routes } from 'react-router-dom'
import { WelcomePage } from '@/modules/welcome/pages'

export const PlatformRouter = () => {
    return (
        <Routes>
            <Route path='/welcome' element={<WelcomePage />} />
        </Routes>
    )
}
