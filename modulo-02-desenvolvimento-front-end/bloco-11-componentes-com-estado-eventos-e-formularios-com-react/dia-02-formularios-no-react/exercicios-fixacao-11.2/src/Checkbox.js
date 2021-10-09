import React from "react";

class Checkbox extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="checkbox">
        Marque a caixa:
        <input
          name="checkbox"
          type="checkbox"
          value={value}
          onChange={handleChange}
        ></input>
      </label>
    );
  }
}

export default Checkbox;
