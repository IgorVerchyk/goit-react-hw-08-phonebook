import React from 'react';
import { connect } from 'react-redux';

import authOperations from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
