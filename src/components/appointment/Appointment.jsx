// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { observer } from "mobx-react"
// import dataStore from "../data/loginStore"
// import '../../styles/Appointment.css'
// import { useState, useEffect } from "react"


// function Appointment({ oneApp }) {
//   let color = 'later';

//   if (
//     new Date(oneApp.dateTime).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)) {
//     color = 'today';
//   }
//   else if (

//     new Date(oneApp.dateTime) < new Date().setDate(new Date().getDate() + 7)) {
//     color = 'thisWeek';
//   }
//   return (
//     <>
//       <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         <div className={`${color}`}>
//         <div>{oneApp.clientName}</div>
//         <div>{oneApp.clientPhone}</div>
//         <div>{oneApp.clientEmail}</div>
//         <h2>{oneApp.dateTime}</h2>
//       </div>
//         </Typography>
//       </CardContent>
//     </Card>
//     </>
//   )
// }

// export default Appointment
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from "mobx-react"
import dataStore from "../data/loginStore"
import '../../styles/Appointment.css'
import { useState, useEffect } from "react"


function Appointment({ oneApp }) {
  let color = 'later';

  if (
    new Date(oneApp.dateTime).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)) {
    color = 'today';
  }
  else if (

    new Date(oneApp.dateTime) < new Date().setDate(new Date().getDate() + 7)) {
    color = 'thisWeek';
  }
  return (
    <>
      <Card sx={{ minWidth: 275, border: "2px solid rgb(81, 70, 7)", borderRadius: "10px", p: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div className={`${color}`}>
              <div><strong className='headerA'>NAME: </strong>{oneApp.clientName}</div>
              <div><strong className='headerA'>PHONE: </strong>{oneApp.clientPhone}</div>
              <div><strong className='headerA'>EMAIL: </strong>{oneApp.clientEmail}</div>
              <h2><strong className='headerA'>date: </strong>{oneApp.dateTime}</h2>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Appointment

