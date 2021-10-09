import React from "react";

class Textarea extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 50) {
      error = 'Texto muito grande!';
    }
    return (
      <label htmlFor="textarea">
        Digite algo
        <textarea
          id="textarea"
          name="textarea"
          row="5"
          cols="30"
          value={value}
          onChange={handleChange}
        ></textarea>
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Textarea;
