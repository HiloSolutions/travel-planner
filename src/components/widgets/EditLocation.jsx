import React from 'react';
import {
  DialogActions,
  InputLabel,
  Input,
  FormGroup,
  Checkbox,
  Button,
  Dialog,
  DialogContent,
  Typography,
  Avatar
} from '@mui/material';
import './EditLocation.css';

const EditLocation = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <div>
          <Avatar className="profile-avatar" alt="User avatar" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
        </div>

        <div>
          <Typography variant="h4">Security</Typography>
        </div>

        <form className="form-horizontal">
          <FormGroup>
            <InputLabel htmlFor="current-password">Current password</InputLabel>
            <Input id="current-password" type="password" />
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="new-password">New password</InputLabel>
            <Input id="new-password" type="password" />
          </FormGroup>

          <FormGroup>
            <Checkbox id="checkbox_1" />
            <label htmlFor="checkbox_1">Make this account public</label>
          </FormGroup>
        </form>


      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Go Back
        </Button>
        <Button onClick={onClose} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditLocation