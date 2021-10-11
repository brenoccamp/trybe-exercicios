import React from "react";
import "./App.css";
import Form from "./Form.js";
import FormDataDisplay from "./FormDataDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      cidade: "",
      endereço: "",
      adressType: "",
      estado: "",
      resume: "",
      role: "",
      roleDescription: "",
      formError: {},
      submitted: false,
    };
  }

  sendForm = () => {
    this.setState({ submitted: true });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      cpf: "",
      cidade: "",
      endereço: "",
      adressType: "",
      estado: "",
      resume: "",
      role: "",
      roleDescription: "",
      formError: {},
      submitted: false,
    });
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    if (name === 'name') target.value = value.toUpperCase();
    if (name === 'endereço') target.value = value.replace(/[^\w\s]/gi, '');

    this.setState(() => ({
      [name]: value,
    }))
  };

  render() {
    const { submitted } = this.state;
    return (
      <main>
        <Form sendForm={this.sendForm} resetForm={this.resetForm} handleChange={this.handleChange} />
        { submitted && <FormDataDisplay currentState={this.state} />}
      </main>
    );
  }
}

export default App;
