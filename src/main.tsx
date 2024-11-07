import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Routes
import FindRoutes from './routes/FindRoutes.tsx'
import UserFeed from './routes/UserFeed.tsx'
import UserRoutes from './routes/UserRoutes.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'find-routes',
        element: <FindRoutes/>
      },
      {
        path: '/',
        element: <UserFeed/>
      },
      {
        path: 'user-routes',
        element: <UserRoutes/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
