
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { editBusinessData } from '../data/businessDataServer';
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import '../../styles/Business.css'

const EditBusinessData = (observer(() => {
  const [open, setOpen] = React.useState(false);

  
  const nevigate = useNavigate()
  const handleClose = () => {
     setOpen(false);
    // nevigate('/admin')
  };

  return (
    <React.Fragment>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="secondary" aria-label="edit">
            <EditIcon id="edit" onClick={() => setOpen(true)}/>
        </Fab>
      </Box>
      {/*  */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            debugger
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());

            editBusinessData(formJson)

            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          {/* <TextField
            autoFocus
            // required
            margin="dense"
            id="id"
            name="id"
            label="id"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            // required
            margin="dense"
            id="name"
            name="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="address"
            name="address"
            label="address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="phone"
            name="phone"
            label="phone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="owner"
            name="owner"
            label="owner"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            // required
            margin="dense"
            id="logo"
            name="logo"
            label="logo"
            type="img"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            // required
            margin="dense"
            id="description"
            name="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}))
export default EditBusinessData