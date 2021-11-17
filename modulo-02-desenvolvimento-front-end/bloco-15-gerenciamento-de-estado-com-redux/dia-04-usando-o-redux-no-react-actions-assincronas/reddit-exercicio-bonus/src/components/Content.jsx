import React from "react";
import { connect } from "react-redux";
import './Content.css';


class Content extends React.Component {
  render() {
    const { dataAPI } = this.props;
    // console.log(dataAPI)
    return (
      <div className="page-content">
        <section className="section-content">
          <ul>
            {dataAPI.data.children.map(element => (
              <li key={ element.data.title }>{element.data.title}</li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataAPI: state.apiReducer.responseAPI,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps)(Content);
