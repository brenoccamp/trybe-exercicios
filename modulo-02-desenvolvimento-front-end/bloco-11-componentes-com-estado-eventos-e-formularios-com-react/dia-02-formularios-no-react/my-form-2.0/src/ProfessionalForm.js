import React from 'react';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset className='professional-fieldset'>
        <legend>Dados Profissionais:</legend>
        <div className='container'>
          Resumo do currículo:
          <textarea name='resume' maxLength='1000' onChange={handleChange} required />
        </div>
        <div className='container'>
          Cargo:
          <input type='text' name='role' maxLength='40' onChange={handleChange} required onMouseEnter={() => {
            alert('Preencha com cuidado esta informação.'
            )}}/>
        </div>
        <div className='container'>
          Descrição do cargo:
          <textarea name='roleDescription' maxLength='500' onChange={handleChange} />
        </div>
      </fieldset>
    )
  }
}

export default ProfessionalForm;
