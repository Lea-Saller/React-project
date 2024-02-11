import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AdminPage from './components/admin/AdminPage.jsx'
import EditBusinessData from './components/businessData/EditBusinessData.jsx'
import ServiceList from './components/services/ServicesList.jsx'
import AddService from './components/services/AddService.jsx'
import AppointmentList from './components/appointment/AppointmentList.jsx'

const routsArray = createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '/admin',
  element: <AdminPage />,
  children: [
  {
    path: 'services',
    element: <ServiceList />
  },
  {
    path: 'appointments',
    element: <AppointmentList />
  }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routsArray} />
  </React.StrictMode>,
)

