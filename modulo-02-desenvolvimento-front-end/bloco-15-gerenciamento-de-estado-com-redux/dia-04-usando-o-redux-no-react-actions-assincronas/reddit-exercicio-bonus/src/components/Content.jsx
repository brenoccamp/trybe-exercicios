import React from "react";
import { connect } from "react-redux";
import './Content.css';


class Content extends React.Component {
  render() {
    const { dataAPI: { data: { children } }, loading } = this.props;
    if (children.length === 1 || loading) return <h1>Carregando...</h1>
    return (
      <div className="page-content">
        <section className="section-content">
          <ul>
            {children.map(element => (
              <li key={ element.data.title }>{element.data.title}</li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.apiReducer.loading,
  dataAPI: state.apiReducer.responseAPI,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps)(Content);
