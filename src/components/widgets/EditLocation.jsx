import React, {useState, useEffect} from 'react';
import Loading from '../Loading';
import { getLocationTypes } from '../../api/tripEndpoints';
import {
  DialogActions,
  InputLabel,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Avatar,
  TextField,
  Box
} from '@mui/material';
import './EditLocation.css';


const EditLocation = ({ 
  open, 
  onClose,
  location
}) => {

  const [locationTypes, setLocationTypes] = useState(null);

  //get information from the dtatabase that is relevant to all users
  useEffect(() => {
    getLocationTypes()
      .then((res) => {
        setLocationTypes(res);
      })
  }, []);
  

  if (!locationTypes) {
    return <Loading />;
  }

  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className='dialog-container'
    >
      <DialogContent>

        <div>
          <Avatar className="profile-avatar" alt="User avatar" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
        </div>

        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: 'fit-content',
          }}
        >
          {/* Name of location */}
          <InputLabel
            sx={{ fontWeight: "medium", width: "20%" }}
            className="mt-3"
          >
            {location.location_name}
          </InputLabel>
          <TextField
            defaultValue={location.location_name}
            className='text-field'
            name="location-name"
            type="text"
          />

          {/* Address */}
          <InputLabel
            sx={{ fontWeight: "medium", width: "20%" }}
            className="mt-3"
          >
            {location.location_lat},{location.location_lng}
          </InputLabel>
          <TextField
            defaultValue={[location.location_lat, location.location_lng]}
            className='text-field'
            name="location-name"
            type="text"
          />


          {/* Select category */}
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel htmlFor="max-width">Select Category</InputLabel>
            <Select
              autoFocus
              label="category"
              value={location.location_type_category}
            >
              {locationTypes.map((e, i) => (
                <MenuItem
                  value={e.location_type_category}
                  key={i}
                >
                  {e.location_type_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Box>


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