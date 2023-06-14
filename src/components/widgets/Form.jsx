import React, { useState } from 'react';
import './Form.css';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';



//make date field inputs
const MakeDateFields = () => {
  const [date, setDate] = useState(null);

  const dateFieldInputs = [
    { label: 'Start Date', name: 'startDate', value: 5 },
    { label: 'End Date', name: 'endDate', value: 5 }
  ];

  return dateFieldInputs.map((field, index) => {

    return (
      <div key={index} className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          {field.label}
        </InputLabel>
        <DatePicker />
      </div>
    );
  });
};

//make text field inputs
const MakeTextFields = () => {
  const [num, setNum] = useState(null);

  const textFieldInputs = [
    { label: 'Latitude', name: 'lat', value: 5 },
    { label: 'Longitude', name: 'lng', value: 5 },
  ];

  return textFieldInputs.map((field, index) => {

    return (
      <div key={index} className='input-container'>
        <InputLabel
          sx={{ fontWeight: "medium", width: "20%" }}
          className="mt-3"
        >
          {field.label}
        </InputLabel>
        <TextField
          className='textfield'
          defaultValue={field.value}
          name={field.name}
          type="number"
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    );
  });
};


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

  return (
    <form className='form-container'>
      <MakeDateFields />
      <MakeTextFields />
      <MakeSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
    </form>
  );
};

export default Form;