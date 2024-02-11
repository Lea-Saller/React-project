import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addAppointment, getAppointments } from '../data/appointmentServer';
import { observer } from "mobx-react"
import { useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dataStore from "../data/serviceStore";
import { getServices } from '../data/serviceServer';


const AddAppointment = (observer(() => {
  useEffect(() => {

    getServices()

  }, [])
  const [open, setOpen] = React.useState(false);
  const [isBold, setIsblod] = React.useState(false);

  const [service, setService] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submited = (event) => {
    event.preventDefault();
    setIsblod(false)
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    let formJson = Object.fromEntries(formData.entries());
    formJson = { ...formJson, service }
    console.log("onSubmitttt", formJson);
    if (new Date(formJson.dateTime) > new Date()) {
      addAppointment(formJson).then(x => {
        handleClose();
      }).catch(x => {
        if (x.response.status == 400) {
          setIsblod(true)
        }

      });
    }
    else {
      alert("ERRODATE ")
    }

  }

  return (
    <React.Fragment>
      <Button style={{margin: '20px'}} variant="outlined" onClick={handleClickOpen}>
        ADDAPPOINTMENT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => submited(event),
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="service">service</InputLabel>
            <Select
              labelId="service"
              value={service}
              onChange={e => setService(e.target.value)}
              name='serviceType'
            >
              {
                dataStore.ListService.map(s => {
                  return (
                    <MenuItem value={s.id} key={s.id}>{s.name}</MenuItem>
                  )
                })
              }
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="id"
            name="id"
            label="id"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="id"
            name="id"
            label="Business Name"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="clientName"
            name="clientName"
            label="clientName"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="dateTime"
            label="date"
            type="datetime-local"
            fullWidth

            variant="standard"
            style={{border: isBold ? "2px solid red" : null}}
            className={isBold ? "bold" : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="clientPhone"
            name="clientPhone"
            label="clientPhone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="clientEmail"
            name="clientEmail"
            label="clientEmail"
            type="email"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}))
export default AddAppointment
