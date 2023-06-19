import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditPicture from '../widgets/EditPicture';

const EditPictureButton = ({
  initialPicture,
  isFormDirty,
  setIsFormDirty,
  location
}) => {
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
          location={location}
          initialPicture={initialPicture}
          onClose={handleEditClose}
          setOpenEdit={setOpenEdit}
          isFormDirty={isFormDirty}
          setIsFormDirty={setIsFormDirty}
        />
      </Dialog>
    </>
  );
};

export default EditPictureButton;
