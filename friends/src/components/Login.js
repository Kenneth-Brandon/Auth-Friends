import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  handleChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  login = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then((response) => {
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/friends');
      })
      .catch((error) => {
        localStorage.removeItem('token');
        console.error('invalid login: ', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={this.login}>
          <label>Username: </label>
          <input
            className="single-input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label>Password: </label>
          <input
            className="single-input"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
