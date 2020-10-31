import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import NavBar from './NavBar';

const AppLayout = ({ errorMessage, children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {errorMessage && alert(`Woops, somthing go wrong... ${errorMessage}`)}
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessage: authSelectors.getCurrentError(state),
});

export default connect(mapStateToProps)(AppLayout);
