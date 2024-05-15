import { Route, Routes } from 'react-router-dom'

import { GuidePage } from '@/modules/guide'
import { HelpPage } from '@/modules/help'
import { TermsPage } from '@/modules/terms'
import { WelcomePage } from '@/modules/welcome'

export const PlatformRouter = () => {
    return (
        <Routes>
            <Route path='/welcome' element={<WelcomePage />} />
            <Route path='/guide' element={<GuidePage />} />
            <Route path='/terms-and-conditions' element={<TermsPage />} />
            <Route path='/faq' element={<HelpPage />} />
        </Routes>
    )
}
