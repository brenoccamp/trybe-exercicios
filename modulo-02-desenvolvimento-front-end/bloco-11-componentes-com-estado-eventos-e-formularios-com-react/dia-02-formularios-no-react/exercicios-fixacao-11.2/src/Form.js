import React from "react";
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      textarea: "Escreva aqui seu texto!",
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  submit = (event) => {
    event.preventDefault();
    const filesInput = this.fileInput.current.files[0] === undefined ? alert('Faça Upload de um arquivo!') : alert(`Você adicionou o arquivo ${this.fileInput.current.files[0].name}`);
  };

  render() {
    return (
      <div>
        <h1>
          Exercício de fixação Parte I - Dia 11.2 - Formulário para testar as
          habilidades
        </h1>
        <form className="form" onSubmit={this.submit}>
          <fieldset className='fieldset'>
            <legend>Preencha o formulário abaixo:</legend>
            <label for="skills">
              Escolha uma habilidade:
              <select name="skills" id="skills" onChange={this.handleChange}>
                <option value="html5">HTML5</option>
                <option value="js">JavaScript</option>
                <option value="css">CSS</option>
                <option value="react">React</option>
              </select>
            </label>
            <label for="checkbox">
              Marque a caixa:
              <input
                name="checkbox"
                type="checkbox"
                onChange={this.handleChange}
              ></input>
            </label>
            <label for="email">
              Digite seu email:
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
              ></input>
            </label>
            <label for="textarea">
              Digite algo
              <textarea
                id="textarea"
                name="textarea"
                row="5"
                cols="30"
                onChange={this.handleChange}
              ></textarea>
            </label>
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
