import cx from 'classnames';
import { toUrl } from 'gatsby-source-gravatar';
import React, { memo, useContext, useMemo, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import UserContext from '../../contexts/UserContext';
import styles from './Avatar.module.css';
import { handleKeyUp } from '../../utils';

const Avatar = ({ className }) => {
  const { user, logout } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    handleClose();
  };

  const photoURL = useMemo(() => toUrl(user.email, 'size=128'), [user.email]);

  return (
    <div>
      <div
        tabIndex="0"
        role="button"
        className="flex focus:outline-none"
        onClick={handleClick}
        onKeyUp={(e) => handleKeyUp(e, handleClick)}
      >
        <img
          src={photoURL}
          alt={user.displayName}
          className={cx(styles.container, className)}
        />
      </div>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default memo(Avatar);
