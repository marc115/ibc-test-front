import { Route, Routes } from 'react-router-dom'
import { WelcomePage } from '@/modules/welcome/pages'
import { GuidePage } from '@/modules/guide/page'

export const PlatformRouter = () => {
    return (
        <Routes>
            <Route path='/welcome' element={<WelcomePage />} />
            <Route path='/guide' element={<GuidePage />} />
        </Routes>
    )
}
