import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={Router} />
  </>,
)
