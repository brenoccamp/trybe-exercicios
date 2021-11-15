import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRegister } from '../actions/index';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientData: {
        name: '',
        age: '',
        email: '',
      },
    }
  }
  render() {
    const { clientData } = this.state;
    const { addRegisterSubmit } = this.props;
    return (
      <div>
        <h1>Register PAGE</h1>
        <br></br>
        <label htmlFor="name-input">Digite seu nome:</label>
        <br></br>
        <input
          type="text"
          placeholder="Nome"
          id="name-input"
          name="name-register-input"
          onChange={(e) => this.setState({ clientData: {...clientData, name: e.target.value } })}
          value={clientData.name}
        />
        <br></br>
        <br></br>
        <label htmlFor="age-input">Coloque sua idade:</label>
        <br></br>
        <input
          type="number"
          placeholder="Idade"
          id="age-input"
          name="age-register-input"
          min="0"
          onChange={(e) => this.setState({ clientData: {...clientData, age: e.target.value } })}
          value={clientData.age}
        />
        <br></br>
        <br></br>
        <label htmlFor="email-input">Digite seu email:</label>
        <br></br>
        <input
          type="email"
          placeholder="Email"
          id="email-input"
          name="email-register-input"
          onChange={(e) => this.setState({ clientData: {...clientData, email: e.target.value } })}
          value={clientData.email}
        />
        <br></br>
        <br></br>
        <button
          type="button"
          onClick={() => {
            addRegisterSubmit(clientData);
            this.setState({ clientData: {
              name: '',
              age: '',
              email: '',
            }});
          }}
        >
          Cadastrar
        </button>
        <br></br>
        <br></br>
        <Link to="/clients">Ir para a Página de Clientes Cadastrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRegisterSubmit: (clientDataObj) => dispatch(addRegister(clientDataObj)),
})

export default connect(null, mapDispatchToProps)(Register);
