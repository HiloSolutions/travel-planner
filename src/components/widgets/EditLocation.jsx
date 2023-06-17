import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { getLocationTypes } from '../../api/locationEndpoints';
import {
  DialogActions,
  InputLabel,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Box
} from '@mui/material';
import './EditLocation.css';
import airplane from '../../images/airplane.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



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
      PaperProps={{
        style: {
          width: '50%',
        }
      }}
    >
      <DialogContent>

        <div className="image-container">
          <img src={airplane} alt="Cover" />
          <div className="edit-icon">
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </div>

        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: '100%',
          }}
        >
          {/* Name of location */}
          <InputLabel
            sx={{ fontWeight: "medium", width: "100%" }}
            className="mt-3"
          >
            Location Name
          </InputLabel>
          <TextField
            defaultValue={location.location_name}
            className='text-field'
            name="location-name"
            type="text"
            sx={{ width: "100%" }}
          />

          {/* Address */}
          <InputLabel
            sx={{ fontWeight: "medium", width: "100%" }}
            className="mt-3"
          >
            Address
          </InputLabel>
          <TextField
            defaultValue={[location.location_lat, location.location_lng]}
            className='text-field'
            name="location-name"
            type="text"
            sx={{ width: "100%" }}
          />


          {/* Select category */}
          <InputLabel
            sx={{ fontWeight: "medium", width: "100%" }}
            className="mt-3"
          >
            Tags
          </InputLabel>
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel htmlFor="max-width">Select Category</InputLabel>
            <Select
              autoFocus
              label="category"
              value={location.location_type_category}
              sx={{ width: "100%" }}
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