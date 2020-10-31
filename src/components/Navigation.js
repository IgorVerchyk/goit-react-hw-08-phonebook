import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

import styles from './Contacts.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to="/" exact className={styles.navButton}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" className={styles.navButton}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
