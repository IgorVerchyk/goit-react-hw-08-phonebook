import React from 'react';
import { connect } from 'react-redux';

import authSeletors from '../redux/auth/authSelectors';

import styles from './viewsStyles.module.css';

const HomeView = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>
          Dear {user}, welcome to most awesome contact app ever!{' '}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: authSeletors.getUserName(state),
});

export default connect(mapStateToProps)(HomeView);
