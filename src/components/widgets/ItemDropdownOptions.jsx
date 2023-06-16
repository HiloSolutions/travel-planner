import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import ConfirmDeleteDialog from '../widgets/ConfirmDelete';
import EditLocation from '../widgets/EditLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faTrashCan,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import './ItemDropdownOptions.css';

const ItemDropdownOptions = ({ location }) => {
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [anchorMenu, setAnchorMenu] = React.useState(null);


  const handleDropdownClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleDelete = () => {
    setOpenDelete(true);
    setAnchorMenu(null);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleEdit = () => {
    setOpenEdit(true);
    setAnchorMenu(null);
  };

  return (
    <div>
      <Button
        onClick={handleDropdownClick}
        className='ellipsis-dropdown-container'
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
        open={openEdit}
        onClose={handleEditClose}
      />
      <ConfirmDeleteDialog open={openDelete} onClose={handleDeleteClose} />
    </div>
  );
};

export default ItemDropdownOptions;
