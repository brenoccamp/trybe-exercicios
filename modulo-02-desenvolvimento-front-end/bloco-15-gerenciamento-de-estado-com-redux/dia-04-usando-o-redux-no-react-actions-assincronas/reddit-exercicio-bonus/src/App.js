import React from 'react';
import Content from './components/Content';
import { connect } from 'react-redux';
import { fetchAPI } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subredditSelected: 'reactjs',
    }
  }

  toFetchAPI = (subreddit) => {
    this.setState({ subredditSelected: subreddit });
    const { fetchAPI } = this.props;
    fetchAPI(subreddit);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    const { subredditSelected } = this.state;
    fetchAPI(subredditSelected);
  }

  render() {
    const { subredditSelected } = this.state;
    return (
      <div className="App">
        <h1 className="page-title">Trybe Reddit</h1>
        <label htmlFor="select-subreddit">Selecione um <b>subreddit</b></label>
        <br></br>
        <br></br>
        <select name="select-subreddit" onChange={({ target: { value } }) => this.toFetchAPI(value)}>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <br></br>
        <br></br>
        <p>Last Update at:</p>
        <p>{`${new Date()}`}</p>
        <button
          type="button"
          onClick={() => this.toFetchAPI(subredditSelected)}
        >
          Refresh
        </button>
        <Content />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (subredditName) => dispatch(fetchAPI(subredditName)),
})

export default connect(null, mapDispatchToProps)(App);
