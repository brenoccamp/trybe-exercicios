import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  verifyChange({ target }) {
    let { name, value } = target;
    if (name === 'name') target.value = value.toUpperCase();
    if (name === 'endereço') target.value = value.replace(/[^\w\s]/gi, '');
  }

  handleBur({ target }) {
    const { value } = target;
    target.value = value.match(/^\d/) ? '' : value;
  }

  render() {
    const { sendForm, resetForm, handleChange } = this.props;
    return (
      <form className='form'>
        <PersonalForm verifyChange={this.verifyChange} handleBur={this.handleBur} handleChange={handleChange} />
        <ProfessionalForm handleChange={handleChange} />
        <input type='button' onClick={sendForm} value='Enviar' className='submit-btn'/>
        <input type='reset' onClick={resetForm} value='Limpar' className='reset-btn'/>
      </form>
    );
  }
}

export default Form;
