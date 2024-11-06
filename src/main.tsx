import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider}from 'react-router-dom'
import routes from './configure/Route.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
