import React from 'react';
import { updateTripInDatabase } from '../../api/tripEndpoints';
import './Form.css';
import Loading from '../Loading';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Form = ({ 
  tripId, 
  tripValues, 
  setTripValues,
}) => {
  

  const validateSubmission = () => {
    const { lat, lng, startDate, endDate, zoom } = tripValues;

    const submissionValues = {
      lat,
      lng,
      startDate,
      endDate,
      zoom,
    };

    updateTripInDatabase(submissionValues, tripId);
  };


  if (!tripValues) {
    return <Loading />; // Show a loading state until the tripValues are available
  }

  return (
    <form className='form-container'>
      {/* start date input */}
      <div className='input-container'>
        <InputLabel sx={{ fontWeight: 'medium', width: '20%' }} className='mt-3'>
          Start Date
        </InputLabel>
        <DatePicker
          onChange={(date) => setTripValues({ ...tripValues, startDate: date })}
          defaultValue={dayjs(tripValues.startDate)}
        />
      </div>

      {/* end date input */}
      <div className='input-container'>
        <InputLabel sx={{ fontWeight: 'medium', width: '20%' }} className='mt-3'>
          End Date
        </InputLabel>
        <DatePicker
          onChange={(date) => setTripValues({ ...tripValues, endDate: date })}
          defaultValue={dayjs(tripValues.endDate)}
        />
      </div>

      {/* latitude input */}
      <div className='input-container'>
        <InputLabel sx={{ fontWeight: 'medium', width: '20%' }} className='mt-3'>
          Latitude
        </InputLabel>
        <TextField
          className='textfield'
          defaultValue={tripValues.lat}
          name='lat'
          type='number'
          max={180}
          min={-180}
          onChange={(e) => setTripValues({ ...tripValues, lat: Number(e.target.value) })}
        />
      </div>

      {/* longitude input */}
      <div className='input-container'>
        <InputLabel sx={{ fontWeight: 'medium', width: '20%' }} className='mt-3'>
          Longitude
        </InputLabel>
        <TextField
          className='textfield'
          defaultValue={tripValues.lng}
          name='lng'
          type='number'
          max={90}
          min={-90}
          onChange={(e) => setTripValues({ ...tripValues, lng: Number(e.target.value) })}
        />
      </div>

      {/* buttons to submit or edit */}
      <Button variant='contained' onClick={validateSubmission}>
        Save Changes
      </Button>
    </form>
  );

};

export default Form;