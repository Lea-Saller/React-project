
// import { observer } from "mobx-react";
// import { Grid } from "@mui/material";
// import dataStore from "../data/appointmentStore";
// import Appointment from "./Appointment";
// import { useEffect } from "react";
// import { getAppointments } from "../data/appointmentServer";

// const AppointmentList = observer(() => {
//   const arrApp = [...dataStore.listAppointment];

//   useEffect(() => {
//     if (!arrApp.length) {
//       getAppointments();
//     }
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       {arrApp
//         .sort((a, b) => (a.dateTime > b.dateTime ? 1 : -1))
//         .map((item) => (
//           <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
//             <Appointment oneApp={item} />
//           </Grid>
//         ))}
//     </Grid>
//   );
// });

// export default AppointmentList;


import { observer } from "mobx-react";
import { Grid } from "@mui/material";
import dataStore from "../data/appointmentStore";
import Appointment from "./Appointment";
import { useEffect } from "react";
import { getAppointments } from "../data/appointmentServer";

const AppointmentList = observer(() => {
  const arrApp = [...dataStore.listAppointment];

  useEffect(() => {
    if (!arrApp.length) {
      getAppointments();
    }
  }, []);

  const currentDate = new Date();

  // סינון התורים על פי האם התאריך עבר או לא
  const filteredAppointments = arrApp.filter(
    (item) => new Date(item.dateTime) >= currentDate
  );

  return (
    <Grid container spacing={2}>
      {filteredAppointments
        .sort((a, b) => (a.dateTime > b.dateTime ? 1 : -1))
        .map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Appointment oneApp={item} />
          </Grid>
        ))}
    </Grid>
  );
});

export default AppointmentList;
