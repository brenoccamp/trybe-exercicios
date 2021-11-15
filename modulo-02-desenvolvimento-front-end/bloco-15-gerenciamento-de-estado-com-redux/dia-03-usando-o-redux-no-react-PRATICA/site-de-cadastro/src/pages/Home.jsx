import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <h1>
          Bem vindo ao sistema de cadastramento!
        </h1>
        <Link to="/login"><h2>Faça seu Login!</h2></Link>
      </div>
    );
  }
}

export default Home;
