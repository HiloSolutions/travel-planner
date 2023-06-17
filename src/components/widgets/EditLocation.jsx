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
import locationImage from '../../images/location.png';
import EditPictureButton from '../buttons/EditPictureButton';



const EditLocation = ({
  open,
  onClose,
  location
}) => {

  //states
  const [locationTypes, setLocationTypes] = useState(null);
  const [isFormDirty, setIsFormDirty] = useState(false);


  //data fetching
  useEffect(() => {
    getLocationTypes()
      .then((res) => {
        setLocationTypes(res);
      })
  }, []);


  //methods
  const handleFormChange = () => {
    setIsFormDirty(true);
  };

  const handleSaveClick = () => {
    // Save the form data
    // ...

    // Close the dialog
    onClose();
  };

  //variables
  const inputProps = {
    style: {
      fontSize: 14.6,
      width: "100%"
    },
  };

  const labelStyle = {
    fontWeight: "medium",
    width: "100%",
    fontSize: '16px',
    marginTop: '15px'
  };


  //conditions
  if (!locationTypes) {
    return <Loading />;
  }


  //return value
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
          <img src={locationImage} alt="Cover" />
          <EditPictureButton picture={locationImage}/>
        </div>

        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {/* Name of location */}
          <InputLabel sx={labelStyle}>Location Name</InputLabel>
          <TextField
            defaultValue={location.location_name}
            className='text-field'
            name="location-name"
            type="text"
            variant='filled'
            size="small"
            InputProps={inputProps}
            onChange={handleFormChange}
          />


          {/* Address */}
          <InputLabel sx={labelStyle}>Address</InputLabel>
          <TextField
            defaultValue={[location.location_lat, location.location_lng]}
            className='text-field'
            name="location-name"
            type="text"
            variant='filled'
            size="small"
            InputProps={inputProps}
            onChange={handleFormChange}
          />


          {/* Select category */}
          <InputLabel sx={labelStyle}>Tags</InputLabel>
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel htmlFor="max-width">Select Category</InputLabel>
            <Select
              autoFocus
              label="category"
              variant='filled'
              size='small'
              value={location.location_type_category}
              sx={{ fontSize: 14.6 }}
              onChange={handleFormChange}
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
        <Button
          onClick={onClose}
          variant="outlined"
          size='large'
          sx={{ width: '50%' }}
        >
          Go Back
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          size='large'
          sx={{ width: '50%' }}
          disabled={!isFormDirty}
          disableElevation
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditLocation