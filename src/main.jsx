import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import FormPage from './pages/FormPage.jsx';
import OpenLayersMap from './pages/OpenLayersMap.jsx';

const router = createBrowserRouter([
  {path: `/`, element: <FormPage/>},
  {path: `/openlayersmap`, element: <OpenLayersMap/>},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
