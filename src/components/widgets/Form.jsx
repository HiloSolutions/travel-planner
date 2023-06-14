import React, { useState } from 'react';
import './Form.css';
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


const Form = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const [zoom, setZoom] = useState(10);

console.log(lat, lng, startDate, endDate, zoom)
  const validateSubmission = () => {
    const newLat = lat || 5;
    const newLng = lng || 5;
    const newStartDate = startDate || 5;
    const newEndDate = endDate || 5;
    const newZoom = zoom || 10;

    const submissionValues = {
      lat: newLat,
      lng: newLng,
      start_date: newStartDate,
      end_date: newEndDate,
      zoom: newZoom,
    };

    //updateDatabase(submissionValues);
  };

  return (
    <form className='form-container'>

      {/* start date input */}
      <div className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          Start Date
        </InputLabel>
        <DatePicker
          onChange={(date) => setStartDate(date)}
        />
      </div>

      {/* END date input */}
      <div className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          Start Date
        </InputLabel>
        <DatePicker
          onChange={(date) => setEndDate(date)}
        />
      </div>

      {/* latitude input */}
      <div className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          Latitude
        </InputLabel>
        <TextField
          className='textfield'
          defaultValue={5}
          name='lat'
          type="number"
          onChange={(e) => setLat(Number(e.target.value))}
        />
      </div>

      {/* longitude input */}
      <div className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          Longitude
        </InputLabel>
        <TextField
          className='textfield'
          defaultValue={5}
          name='lng'
          type="number"
          onChange={(e) => setLng(Number(e.target.value))}
        />
      </div>

      {/* zoom */}
      <MakeSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        onChange={(e, newValue) => setZoom(newValue)}
      />

      {/* buttons to submit or edit */}
      <Button
        variant="contained"
        onClick={validateSubmission}
      >
        Save Changes
      </Button>

    </form>
  );
};

export default Form;