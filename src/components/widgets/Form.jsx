import React, { useState } from 'react';
import { updateTripInDatabase } from '../../api/tripEndpoints';
import './Form.css';
import Loading from '../Loading';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';






const MakeSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


const Form = ({ tripId, tripValues, setTripValues }) => {
  const [sliderValue, setSliderValue] = useState(tripValues.zoom);


  const handleSliderChange = (e, newValue) => {
    setSliderValue(newValue);
    setTripValues({ ...tripValues, zoom: newValue });
  };
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
          onChange={(e) => setTripValues({ ...tripValues, lng: Number(e.target.value) })}
        />
      </div>

      {/* zoom */}
      <MakeSlider
        valueLabelDisplay='auto'
        aria-label='pretto slider'
        defaultValue={tripValues.zoom}
        value={sliderValue}
        onChange={handleSliderChange}
      />

      {/* buttons to submit or edit */}
      <Button variant='contained' onClick={validateSubmission}>
        Save Changes
      </Button>
    </form>
  );

};

export default Form;