import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginUser } from './modules'
import './css/global.css'
import { ErrorPage } from './error-page'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginUser />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
