import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  console.log(credentials);

  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(({ message }) => dispatch(authActions.registerFeilure(message)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(({ message }) => dispatch(authActions.loginFeilure(message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(({ message }) => authActions.getCurrentUserFeilure(message));
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logoutFeilure(message)));
};

export default { register, logOut, logIn, getCurrentUser };
