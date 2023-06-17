import React, { useState } from 'react';
import {
  Button,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faTrashCan,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import ConfirmDeleteDialog from '../widgets/ConfirmDelete';
import EditLocation from '../widgets/EditLocation';
import { deleteLocation } from '../../api/locationEndpoints';
import './ItemDropdownOptions.css';




const ItemDropdownOptions = ({
  location,
  savedLocations,
  setSavedLocations,
  updateList
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [anchorMenu, setAnchorMenu] = useState(null);


  const deleteLocatonById = () => {
    return savedLocations.filter(loc => loc.id !== location.id);
  }

  const removeItemById = () => {
    const newLocations = deleteLocatonById();
    updateList(newLocations);
  };


  //Close the modal, update db, then refresh LocationList once successful to reflect the new locations
  const handleDeleteConfirmation = async () => {
    try {
      setOpenDelete(false);
      await deleteLocation(location.trip_id, location.id);
      removeItemById();
    } catch (error) {
      console.error('Error at handleDeleteConfirmation:', error);
    }
  };
  //show dropdown menu options
  const handleDropdownClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };


  //close the delete confirmation modal
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };


  //if delete button is clicked, a confirmation modal appears.
  const handleDelete = () => {
    setOpenDelete(true);
    setAnchorMenu(null);
  };


  //close the edit modal
  const handleEditClose = () => {
    setOpenEdit(false);
  };


  //if edit button is clicked, a location edit modal appears.
  const handleEdit = () => {
    setOpenEdit(true);
    setAnchorMenu(null);
  };


  return (
    <div>
      <Button
        onClick={handleDropdownClick}
        className='ellipsis-dropdown-container'
        style={{ backgroundColor: 'transparent' }}
        disableRipple
      >
        <div className='location-list-controls'>
          <FontAwesomeIcon className='fa-menu' icon={faEllipsis} />
        </div>
      </Button>
      <Menu
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={() => setAnchorMenu(null)}
      >
        <MenuItem onClick={handleEdit}>
          <div className='option edit'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <span>Edit</span>
          </div>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleDelete}>
          <div className='option delete'>
            <FontAwesomeIcon icon={faTrashCan} />
            <span>Delete</span>
          </div>
        </MenuItem>
      </Menu>
      <EditLocation
        location={location}
        savedLocations={savedLocations}
        setSavedLocations={setSavedLocations}
        open={openEdit}
        onClose={handleEditClose}
      />
      <ConfirmDeleteDialog
        open={openDelete}
        onClose={handleDeleteClose}
        onDelete={handleDeleteConfirmation}
        location={location}
        savedLocations={savedLocations}
        updateList={updateList}
      />
    </div>
  );
};

export default ItemDropdownOptions;
