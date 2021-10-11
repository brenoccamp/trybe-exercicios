import React from 'react';
import Form from './Form';

class FormDataDisplay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentState } = this.props
    const { currentState: {name, email, cpf, cidade, endereço, adressType, estado, resume, role, roleDescription }} = this.props;
    console.log(currentState)
    return (
      <div className='form-data'>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Cidade: { cidade }</div>
        <div> Endereço: { endereço }</div>
        <div> Tipo de residência: { adressType }</div>
        <div> Estado: { estado }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resume }</div>
        <div> Cargo: { role }</div>
        <div> Descrição do cargo: { roleDescription }</div>
      </div>
    )
  }
}

export default FormDataDisplay;
