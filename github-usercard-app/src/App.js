import React from 'react';
import axios from 'axios';
import './App.css';
import TopNav from './components/TopNav';
import User from './components/UserCard';
import Followers from './components/Followers';


class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios 
      .get('https://api.github.com/users/YenniLee')
      .then(res => {
        console.log('axios user response', res.data);
        this.setState({
          user: res.data
        })
        return res.data.followers_url;
      })
      .then(followersUrl => {
        axios
        .get(followersUrl)
        .then(res => {
          console.log('nested axios request', res.data)//return an array of followers
          this.setState({
            followers: res.data
          })
        })
      })
      .catch(err => console.log('axios user error', err))
  }

  render() {
    return (
      <div className='app'>
        <TopNav />
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
