import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './NavBarButtons.css';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import SignupButton from '../buttons/SignupButton';
import StyledMenu from './StyledMenu';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';




const NavBarButtons = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  if (isLoading) {
    return <></>;
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown-button-container'>
      <Button
        id="dropdown-button"
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <div className='hamburger-menu'>
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
        {isAuthenticated && (
          <div id='nav-profile-picture'>
            <img alt='hi' src={user.picture} />
          </div>
        )}
        {!isAuthenticated && (
          <div id='nav-profile-picture'>
            <FontAwesomeIcon icon={faUser} className='fa-profile-picture' />
          </div>
        )}
      </Button>
      <StyledMenu
        id="dropdown-menu"
        MenuListProps={{
          'aria-labelledby': 'dropdown-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {!isAuthenticated && (
          <div>
            <MenuItem onClick={handleClose} disableRipple>
              <LoginButton />
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <SignupButton />
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              FAQ
            </MenuItem>
          </div>
        )}
        {isAuthenticated && (
          <div>
            <MenuItem onClick={handleClose} disableRipple>
              <LogoutButton />
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              Account Settings
            </MenuItem>
          </div>
        )}

      </StyledMenu>
    </div>
  );
};

export default NavBarButtons;