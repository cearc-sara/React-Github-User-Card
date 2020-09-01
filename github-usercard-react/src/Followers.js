import React from 'react'
import axios from 'axios'
import {Card, Avatar, CardHeader} from '@material-ui/core'

class Followers extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        username: '',
        location: '',
        profile: '',
        followers: '',
        following: '',
        bio: '',
        image: {}
      }
    }
  
    componentDidMount() {
      axios.get('https://api.github.com/users/cearc-sara/followers')
      .then((res) => {
        console.log(res.data)
        const followersArray = res.data
        followersArray.forEach(follower => {
            this.setState({
                name: follower.name,
                username: follower.login,
                location: follower.location,
                profile: follower.url,
                followers: follower.followers,
                following: follower.following,
                bio: follower.bio,
                image: follower.avatar_url
              })
        })
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
    render() {
    return (
      <Card variant='outlined' className='card'>
        <CardHeader avatar={<Avatar>S</Avatar>} title={this.state.name}/>
        <img src={this.state.image} alt='profile pic' className='image'/>
        <div className='card-info'>
          <h3 className='name'>{this.state.name}</h3>
          <p className='username'>{this.state.username}</p>
          <p>Location: {this.state.location}</p>
          <p>Profile: 
            <a href={this.state.profile} className='profile-link'> {this.state.profile}</a></p>
          <p>Followers: {this.state.followers}</p>
          <p>Following: {this.state.following}</p>
          <p>Bio: {this.state.bio}</p>
        </div>
    </Card>
    )
    }
  }
  
  export default Followers;
  