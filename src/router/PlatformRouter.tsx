import { Route, Routes } from 'react-router-dom'

import { GuidePage } from '@/modules/guide'
import { HelpPage } from '@/modules/help'
import { TermsPage } from '@/modules/terms'
import { WelcomePage } from '@/modules/welcome'
import { PlatformLayout } from '@/components/layouts/PlatformLayout'

export const PlatformRouter = () => {
    return (
        <Routes>
            <Route element={<PlatformLayout />}>
                <Route path='/faq' element={<HelpPage />} />
                <Route path='/guide' element={<GuidePage />} />
                <Route path='/terms-and-conditions' element={<TermsPage />} />
                <Route path='/welcome' element={<WelcomePage />} />
            </Route>
        </Routes>
    )
}
