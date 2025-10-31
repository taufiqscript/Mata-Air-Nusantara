import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/index.jsx'
import ArticleDetail from './pages/ArticleDetail'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const route = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/artikel/:slug', element: <ArticleDetail /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
