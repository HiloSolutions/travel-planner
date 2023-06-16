import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const ConfirmDeleteDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this location? This action can't be undone.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Go Back
        </Button>
        <Button onClick={onClose} color="error" variant="outlined">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
