import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditPicture from '../widgets/EditPicture';

const EditPictureButton = ({ picture }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleClick = () => {
    setOpenEdit(true);
  };

  // Close the edit modal
  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <div className="edit-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faEdit} />
      </div>

      <Dialog
        open={openEdit}
        onClose={handleEditClose}
        className='dialog-container'
        PaperProps={{
          style: {
            width: '31%',
          }
        }}
      >
        <EditPicture
          picture={picture}
          onClose={handleEditClose}
          setOpenEdit={setOpenEdit}
        />
      </Dialog>
    </>
  );
};

export default EditPictureButton;
