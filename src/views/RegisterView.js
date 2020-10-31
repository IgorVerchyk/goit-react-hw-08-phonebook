import React, { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../redux/auth/authOperations';

import styles from './viewsStyles.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password.length >= 8) {
      this.props.onRegister({ ...this.state });
    } else {
      alert(`Password must contain more then 8 sumbols`);
    }

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Register page</h2>

          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label className={styles.label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView,
);
