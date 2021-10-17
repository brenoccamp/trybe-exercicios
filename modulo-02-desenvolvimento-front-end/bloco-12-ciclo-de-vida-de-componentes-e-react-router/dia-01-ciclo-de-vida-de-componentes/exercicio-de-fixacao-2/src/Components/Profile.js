import React from 'react';

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      api: '',
      person: [],
    }
  }

  mountMyProfile = (randomUser) => {
    const { picture: { large }, name: { first, last, title }, email, dob: { age } } = randomUser;
    const fullName = `${title}, ${first} ${last}.`
    return (<div>
      <img src={ large } alt={`foto de ${fullName}.`} />
      <h4>{fullName}</h4>
      <p>{email}</p>
      <p>{age}</p>
    </div>)
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/')
      const dataJson = await response.json();
      const randomUser = dataJson.results[0];
      this.mountMyProfile(randomUser);
      this.setState({ 
        api: randomUser,
        // person: randomUser
      });
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(_nextProps, { api }) {
    const { dob: { age } } = api;
    return age < 50;
  }

  render() {
    const { api } = this.state;
    const loading = <div>Loading...</div>
    return (
      <div>
        {!api ? loading : this.mountMyProfile(api) }
      </div>
    )
  }
}

export default Profile;
