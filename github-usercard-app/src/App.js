import React from 'react';
import axios from 'axios';
import './App.css';
import TopNav from './components/TopNav';
import User from './components/UserCard';
import Followers from './components/Followers';


class App extends React.Component {
  state = {
    user: {},
    followers: [],
    searchInput: '',
    userName: 'YenniLee'
  }

  componentDidMount() {
    axios 
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        // console.log('axios user response', res.data);
        this.setState({
          user: res.data
        })
        return res.data.followers_url;
      })
      .then(followersUrl => {
        axios
        .get(followersUrl)
        .then(res => {
          // console.log('nested axios request', res.data)//return an array of followers
          this.setState({
            followers: res.data
          })
        })
      })
      .catch(err => console.log('axios user error', err))
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      userName: (this.state.searchInput === '' ? 'YenniLee' : this.state.searchInput)
    })
  };
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      axios 
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        // console.log('axios user response', res.data);
        this.setState({
          user: res.data
        })
        return res.data.followers_url;
      })
      .then(followersUrl => {
        axios
        .get(followersUrl)
        .then(res => {
          // console.log('nested axios request', res.data)//return an array of followers
          this.setState({
            followers: res.data
          })
        })
      })
      .catch(err => console.log('axios user error', err))
   }
  };

  render() {
    return (
      <div className='app'>
        <TopNav 
          handleChange={this.handleChange} 
          submitInput={this.state.submitInput} 
          handleSubmit={this.handleSubmit} 
        />
        <div className='cards'>
          <User user={this.state.user}/>
          <Followers followerData={this.state.followers} />
        </div>
      </div>
    )
  }
};

  


export default App;





// import React from 'react';
// import axios from 'axios';
// import UserCard from './components/UserCard';
// import Followers from './components/Followers';

// class App extends React.Component {
//   state = {
//     user: {},
//     followers: []
//   }

//   componentDidMount() {
//     axios
//       .get('https://api.github.com/users/YenniLee')
//       .then(res => {
//         console.log(res.data)
//         this.setState({user: res.data})
//       })
//       .catch(err => console.error("axios error", err))

//     axios
//     .get('https://api.github.com/users/YenniLee/followers')  
//     .then(res => {
//       this.setState({followers: res.data})
//       console.log('followers', res.data)

//     })
//     .catch(err => console.error("follower axios err", err))
//   }



//   render() {
//     console.log('rendering...')
//     return (
//       <div className="App">
//         <h1>GitHub User Profiles</h1>
//         <UserCard user={this.state.user} />
//         <h1>Followers</h1>
//         <Followers followerData={this.state.followers} />
//       </div>
//     );
//   }
  
// }

// export default App;
