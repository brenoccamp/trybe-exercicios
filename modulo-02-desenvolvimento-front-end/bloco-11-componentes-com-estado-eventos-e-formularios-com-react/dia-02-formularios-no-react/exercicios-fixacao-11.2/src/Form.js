import React from "react";
import './Form.css';
import Skills from "./Skills";
import Checkbox from './Checkbox';
import Textarea from "./Textarea";

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    // this.handleError = this.handleError.bind(this);
    this.state = {
      skills: '',
      checkbox: '',
      email: '',
      textarea: '',
      formularioComErros: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      if (target.name === 'textarea') {
        if (value.length > 50) {
          this.setState(({ formularioComErros: true }))
        } else {
          this.setState({ formularioComErros: false })
        }
      } 
    });
  }

  // handleError() {
  //   this.setState({ formularioComErros: true })
  // }

  submit = (event) => {
    event.preventDefault();
    const filesInput = this.fileInput.current.files[0] === undefined ? alert('Faça Upload de um arquivo!') : alert(`Você adicionou o arquivo ${this.fileInput.current.files[0].name}`);
  };

  render() {
    return (
      <div>
        <h1>
          Exercício de fixação Parte I-II e III - Dia 11.2 - Formulário para testar as
          habilidades
        </h1>
        <form className="form" onSubmit={this.submit}>
          <fieldset className='fieldset'>
            <legend>Preencha o formulário abaixo:</legend>
            <Checkbox handleChange={this.handleChange} value={this.state.checkbox} />
            <Skills handleChange={this.handleChange} value={this.state.skills} handleError={this.handleError}/>
            <label htmlFor="email">
              Digite seu email:
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
              ></input>
            </label>
            <Textarea handleChange={this.handleChange} value={this.state.textarea} handleError={this.handleError}/>
            <label>
              Upload file:
              <input type="file" ref={this.fileInput} />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
