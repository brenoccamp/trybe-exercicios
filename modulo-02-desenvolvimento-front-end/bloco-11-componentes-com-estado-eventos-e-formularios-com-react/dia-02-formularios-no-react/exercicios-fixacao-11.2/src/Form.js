import React from "react";

class Form extends React.Component {
  constructor() {
    super()
    this.selectedSkill = this.selectedSkill.bind(this);
    this.markedCheckbox = this.markedCheckbox.bind(this);
    this.state = {
      skills: '',
      checkbox: '',
      email: '',
      textarea: '',
    }
  }

  selectedSkill(event) {
    this.setState(({ skills: event.target.value }))
  }

  markedCheckbox(event) {
    this.setState(({ checkbox: event.target.value }))
  }

  render() {
    return (
      <div>
        <h1>Exercício de fixação Parte I - Dia 11.2 - Formulário para testar as habilidades</h1>
        <form className="form">
          <label for='skills'>Escolha uma habilidade:
            <select name="skills" id="skills" onChange={this.selectedSkill}>
              <option value="html5">HTML5</option>
              <option value="js">JavaScript</option>
              <option value="css">CSS</option>
              <option value="react">React</option>
            </select>
          </label>
          <label for="checkbox">Marque a caixa:
            <input name="checkbox" type="checkbox" onChange={this.markedCheckbox}></input>
          </label>
          <label for="email">Digite seu email:
            <input type="email" name="email"></input>
          </label>
          <label for="textarea">Digite algo
          <textarea id='textarea' name='textarea' row='5' cols='30'></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
