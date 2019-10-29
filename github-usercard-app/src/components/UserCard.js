import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const User = props => {
  console.log('props', props);
  const extra = (
    <div>
      <a href={props.user.repos_url}>GitHub Repos</a>
    </div>
  )

  return (
    <Container>
      <Card className='userCard'
        header={props.user.name}
        image={props.user.avatar_url}
        meta={props.user.location}
        alt={props.user.login}
        extra={extra}
      />
    </Container>
  )
}

export default User;

// import React from 'react';
// import { Card, Container } from 'semantic-ui-react'
// import '../App.css';

// const UserCard = props => {
//   console.log('props', props)
//   const extra = (
//     <div>
//         <a href={props.user.repos_url} />
//         <a href={props.user.html_url} />
//     </div>
//   )

//   return (
//     <Container>
//         <Card className='userCard'
//             header={props.user.name}
//             image={props.user.avatar_url}
//             alt={props.user.name}
//             meta={props.user.location}
//             extra={extra}
//         />
//     </Container>
//   )
// }

// export default UserCard;
