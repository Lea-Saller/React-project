import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Outlet, Link } from "react-router-dom"
import EditBusinessData from "../businessData/EditBusinessData"
import { observer } from "mobx-react"
import { useState } from "react"
import dataStore from "../data/loginStore"
import AddService from "../services/AddService"
import BusinessData from '../businessData/BusinessData';
import ServiceList from '../services/ServicesList';
import '../../styles/Admin.css'

const AdminHome = (observer(() => {
  //const [data, setData]=useState({})
  //const data= dataStore.businessData

  return (
    <>
      <BusinessData />
      <Link to='services'>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          {/* <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab> */}
          <Fab variant="extended" size="medium" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            show services
          </Fab>
        </Box>
      </Link>
      <Link to='appointments'>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab variant="extended" size="medium" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            show appointments
          </Fab>
        </Box>
      </Link>
      <Outlet />
    </>
  )
}))

export default AdminHome


