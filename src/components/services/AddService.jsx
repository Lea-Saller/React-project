import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addService } from '../data/serviceServer';
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import swal from 'sweetalert2';

const AddService = (observer(() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const nevigate = useNavigate()
  const handleClose = () => {
    setOpen(false);
  };
  const submited = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    addService(formJson).then(x => {

      handleClose();
   
    })
    console.log(email);
  }
  return (
    <React.Fragment>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="secondary" aria-label="edit">
            <AddIcon  onClick={handleClickOpen}/>
        </Fab>
      </Box>
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
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="id"
            name="id"
            label="id"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
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
            required
            margin="dense"
            id="description"
            name="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="price"
            type="number"
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="duration"
            name="duration"
            label="duration"
            type="number"
            fullWidth
            variant="standard"
          /> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}))
export default AddService
