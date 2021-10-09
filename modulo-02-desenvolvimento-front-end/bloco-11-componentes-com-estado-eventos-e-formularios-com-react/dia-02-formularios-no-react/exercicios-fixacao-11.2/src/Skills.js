import React from "react";

class Skills extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="skills">
        Diga sua habilidade:
        <select name="skills" id="skills" value={value} onChange={handleChange} >
          <option value="html5">HTML5</option>
          <option value="js">JavaScript</option>
          <option value="css">CSS</option>
          <option value="react">React</option>
        </select>
      </label>
    );
  }
}

export default Skills;
