import React, { useState } from 'react';
import {
  DialogActions,
  InputLabel,
  Button,
  DialogContent,
  Box
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { updateLocationPicture } from '../../api/locationEndpoints';

const EditPicture = ({
  location,
  initialPicture,
  setOpenEdit,
  isFormDirty,
  setIsFormDirty
}) => {
  const [newPicture, setNewPicture] = useState(null);

  const handleFileSelect = (event) => {
    setIsFormDirty(true);
    setNewPicture(event.target.files[0]);
  };

  const onSave = () => {
    updateLocationPicture(newPicture, location.id);
    setIsFormDirty(false);
  };

  const onClose = () => {
    setOpenEdit(false);
  };

  const labelStyle = {
    fontWeight: 'medium',
    width: '100%',
    fontSize: '16px',
    marginTop: '15px'
  };

  return (
    <>
      <DialogContent>
        <div className="image-container">
          {newPicture ? (
            <img
              key={newPicture.name}
              src={URL.createObjectURL(newPicture)}
              alt="Cover"
            />
          ) : (
            <img src={initialPicture} alt="Cover" />
          )}
        </div>

        <Box
          noValidate
          component="form"
          encType="multipart/form-data"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <InputLabel sx={{ ...labelStyle, marginTop: '15px' }}>New URL</InputLabel>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="edit-picture-input"
            type="file"
            onChange={handleFileSelect}
          />
          <label htmlFor="edit-picture-input">
            <Button
              variant="outlined"
              component="span"
              startIcon={<PhotoCamera />}
              sx={{ width: '100%', marginTop: '5px' }}
            >
              Choose Picture
            </Button>
          </label>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          size="large"
          sx={{ width: '50%' }}
        >
          Go Back
        </Button>
        <Button
          onClick={onSave}
          variant="contained"
          size="large"
          sx={{ width: '50%' }}
          disabled={!isFormDirty}
          disableElevation
        >
          Save
        </Button>
      </DialogActions>
    </>
  );
};

export default EditPicture;
