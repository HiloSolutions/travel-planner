import React, { useState } from 'react';
import {
  DialogActions,
  InputLabel,
  Button,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Box
} from '@mui/material';

const EditPicture = ({ picture, setOpenEdit }) => {
  const [isFormDirty, setIsFormDirty] = useState(false);



  //methods
  const handleFormChange = () => {
    setIsFormDirty(true);
  };

  const onClose = () => {
    setOpenEdit(false);
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

  return (
    <>
      <DialogContent>

        <div className="image-container">
          <img src={picture} alt="Cover" />
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
          <InputLabel sx={labelStyle}>New URL</InputLabel>
          <TextField
            className='text-field'
            name="location-name"
            type="text"
            variant='filled'
            size="small"
            InputProps={inputProps}
            onChange={handleFormChange}
          />
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
    </>
  )
}

export default EditPicture