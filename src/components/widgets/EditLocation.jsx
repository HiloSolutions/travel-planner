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
import shortid from 'shortid';




const EditLocation = ({
  open,
  onClose,
  location,
  onSave
}) => {

  //states
  const [locationTypes, setLocationTypes] = useState(null);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [newName, setNewName] = useState(null);
  const [newCategory, setNewCategory] = useState('');


  //data fetching
  useEffect(() => {
    getLocationTypes()
      .then((res) => {
        setLocationTypes(res);
      })
  }, []);


  //methods
  const handleNameChange = (e) => {
    setNewName(e.target.value);
    setIsFormDirty(true);
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
    setIsFormDirty(true);
  };

  //submit new values to the database and update savedLocations state
  const handleSaveClick = () => {
    const location_name = newName || location.location_name;
    const location_type_category = newCategory || location.location_type_category;
    const id = location.id;


    const makeNewCategoryName = () => {
      if (location_type_category === 'sightSeeing') {
        return 'Tourist Attraction';
      }
      if (location_type_category === 'artAndEducation') {
        return 'Arts and Education';
      }
      if (location_type_category === 'outdoors') {
        return 'Outdoor Activity';
      }
      if (location_type_category === 'nightlife') {
        return 'Nightlife';
      }
      if (location_type_category === 'foodAndDrink') {
        return 'Food and Drink';
      }
      if (location_type_category === 'pointOfCuriosity') {
        return 'Point of Curiosity';
      }
      if (location_type_category === 'accomodation') {
        return 'Accomodation';
      }
      if (location_type_category === 'transportation') {
        return 'Airport / Port / Station';
      }
      if (location_type_category === 'pitstop') {
        return 'Pit Stop'
      }
      return 'No Category';
    }
  

  const editedLocation = {
    id,
    trip_id: location.trip_id,
    location_name,
    location_lat: location.location_lat,
    location_lng: location.location_lng,
    location_type_category,
    location_type_name: makeNewCategoryName()
  }

  console.log('1: handleSaveClick', Number(location.location_lat), location.location_lat)
  //calls function to update db and state in parent - so delete and edit logic happens at the same level (easier for me to read)
  onSave(editedLocation);

}

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
        <EditPictureButton picture={locationImage} />
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
          onChange={(e) => handleNameChange(e)}
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
        />


        {/* Select category */}
        <InputLabel sx={labelStyle}>Tags</InputLabel>
        <FormControl sx={{ mt: 2, minWidth: 120 }}>
          <InputLabel htmlFor="max-width">Select Category</InputLabel>
          <Select
            autoFocus
            label="category"
            variant='filled'
            defaultValue=''
            size='small'
            sx={{ fontSize: 14.6 }}
            onChange={(e) => handleCategoryChange(e)}
          >
            {locationTypes.map((e, i) => {

              return (
                <MenuItem value={e.location_type_category} key={shortid.generate()}>
                  {e.location_type_name}
                </MenuItem>
              );
            })}
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
        onClick={handleSaveClick}
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