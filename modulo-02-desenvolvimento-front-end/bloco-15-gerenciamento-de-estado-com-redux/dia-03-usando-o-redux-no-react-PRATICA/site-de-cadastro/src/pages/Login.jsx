import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    const { loginSubmit, history } = this.props;
    return (
      <div className="login-page-container">
        <br></br>
        <label htmlFor="email-input">Digite seu email:</label>
        <br></br>
        <input
          id="email-input"
          type="email"
          placeholder="email"
          name="email-inputted"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br></br>
        <br></br>
        <label htmlFor="password-input">Digite sua senha</label>
        <br></br>
        <input
        type="password"
        id="password-input"
        placeholder="senha"
        name="password-inputted"
        onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br></br>
        <br></br>
          <button
            type="button"
            onClick={() => loginSubmit(email, password, history)}
          >
            Entrar
          </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (email, password, history) => {
    dispatch(loginAction(email, password));
    history.push('/clients');
  },
});

export default connect(null, mapDispatchToProps)(Login);
