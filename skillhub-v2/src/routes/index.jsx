import { createBrowserRouter } from 'react-router-dom'
import HomePage      from '../pages/HomePage'
import ServicesPage  from '../pages/ServicesPage'
import ProjectsPage  from '../pages/ProjectsPage'
import AboutPage     from '../pages/AboutPage'
import ContactPage   from '../pages/ContactPage'
import NotFoundPage  from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/',         element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/about',    element: <AboutPage /> },
  { path: '/contact',  element: <ContactPage /> },
  { path: '*',         element: <NotFoundPage /> },
])
