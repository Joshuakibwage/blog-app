import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/blogs',
        element:<Blogs />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/services',
        element:<Services />
      },
      {
        path:'/about',
        element: <About />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
