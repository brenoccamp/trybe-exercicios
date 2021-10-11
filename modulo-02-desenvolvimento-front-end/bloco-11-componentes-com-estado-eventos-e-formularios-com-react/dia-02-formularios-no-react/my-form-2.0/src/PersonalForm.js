import React from 'react';

  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

class PersonalForm extends React.Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    const { handleChange, handleBur } = this.props;
    return (
      <fieldset className='personal-fieldset'>
        <legend>Dados Pessoais:</legend>
        <div className='container'>
          Nome:
          <input type='name' name='name' maxLength='40' onChange={handleChange} required />
        </div>
        <div className='container'>
          Email:
          <input type='email' name='email' maxLength='50' onChange={handleChange} required />
        </div>
        <div className='container'>
          CPF:
          <input type='text' name='cpf' maxLength='11' onChange={handleChange} required />
        </div>
        <div className='container'>
          Cidade:
          <input type='text' name='cidade' maxLength='28' onChange={handleChange} onBlur={handleBur} required />
        </div>
        <div className='container'>
          Endereço:
          <input type='text' name='endereço' maxLength='200' onChange={handleChange} required />
        </div>
        <div className='container'>
          <label htmlFor='house'>
            <input type='radio' id='house' name='adressType' onChange={handleChange} value='house' />
            Casa
          </label>
          <label htmlFor='apart'>
            <input type='radio' id='apart' name='adressType' onChange={handleChange} value='apartment' />
            Apartamento
          </label>
        </div>
        <div className='container'>
          Estado:
          <select name='estado' required defaultValue='' onChange={handleChange}>
            <option value=''>Selecione</option>
            {states.map((state, key) => (
              <option key={key}>{state}</option>
            )
            )}
          </select>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
