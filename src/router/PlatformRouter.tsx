import { Route, Routes } from 'react-router-dom'
import { WelcomePage } from '@/modules/welcome/pages'
import { GuidePage } from '@/modules/guide/page'
import { TermsPage } from '@/modules/terms/page'

export const PlatformRouter = () => {
    return (
        <Routes>
            <Route path='/welcome' element={<WelcomePage />} />
            <Route path='/guide' element={<GuidePage />} />
            <Route path='/terms-and-conditions' element={<TermsPage />} />
        </Routes>
    )
}
