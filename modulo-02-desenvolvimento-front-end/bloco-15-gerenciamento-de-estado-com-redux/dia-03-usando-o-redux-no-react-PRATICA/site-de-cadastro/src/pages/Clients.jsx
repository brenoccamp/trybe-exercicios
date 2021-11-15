import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from '../actions/index';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedEnabled: false,
    }
  }
  render() {
    const { userLogin, registereds, deleteRegister } = this.props;
    const registeredsSortedByName = [...registereds];
    registeredsSortedByName.sort((a, b) => {
      const nameA =  a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    })
    const { sortedEnabled } = this.state;
    if (!userLogin.email) return <h2>Login não efetuado!</h2>
    if (registereds.length < 1) {
      return (
        <div>
          <h2>Nenhum cliente cadastrado!</h2>
          <Link to="/register"><h3>Cadastre-se Agora!</h3></Link>
        </div>
      );
    }
    return (
      <div className="client-page-container">
        <br></br>
        Clients PAGE
        <br></br>
        <br></br>
        <Link to="/register">
          <button
            type="button"
          >
            Cadastrar novo cliente
          </button>
        </Link>
        <br></br>
        <button
          type="button"
          onClick={() => this.setState({ sortedEnabled: !sortedEnabled })}
        >
          Ordenar
        </button>
        <br></br>
        {!sortedEnabled ? (
          registereds.map((registeredClient, index) => (
            <div key={ index } className="client-card">
              <p>ID de registro: {index + 1}</p>
              <p>Nome: {registeredClient.name}</p>
              <p>Idade: {registeredClient.age}</p>
              <p>Email: {registeredClient.email}</p>
              <button
                type="button"
                onClick={() => deleteRegister(registeredClient)}
                >X
              </button>
            </div>
          ))
        ): (
          registeredsSortedByName.map((registeredClient, index) => (
            <div key={ index } className="client-card">
              <p>ID de registro: {index + 1}</p>
              <p>Nome: {registeredClient.name}</p>
              <p>Idade: {registeredClient.age}</p>
              <p>Email: {registeredClient.email}</p>
              <button
                type="button"
                onClick={() => deleteRegister(registeredClient)}
                >X
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.LoginReducer,
  registereds: state.RegisterReducer.registeredClients,
});

const mapDispatchToProps = (dispatch) => ({
  deleteRegister: (registeredClient) => dispatch(deleteRegister(registeredClient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
