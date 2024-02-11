// import { BrowserRouter } from "react-router-dom"
import AdminPage from "./components/admin/AdminPage"
import EditBusinessData from "./components/businessData/EditBusinessData"
import AdminHome from "./components/admin/AdminHome"
import AddAppointment from "./components/appointment/AddAppointment"
import AddService from "./components/services/AddService"
import ServiceList from "./components/services/ServicesList"
import BusinessData from "./components/businessData/BusinessData"
import AppointmentList from "./components/appointment/AppointmentList"
import './App.css'
function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <BusinessData/>
      <AddAppointment/>
      <ServiceList/>
      
      {/* </BrowserRouter> */}

    </>
  )
}

export default App
