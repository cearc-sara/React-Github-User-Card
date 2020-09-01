import React from 'react'
import axios from 'axios'
import {Card, Avatar, CardHeader} from '@material-ui/core'

class Followers extends React.Component {
    constructor() {
      super();
      this.state = {
        followers:[]
      }
    }
  
    componentDidMount() {
      axios.get('https://api.github.com/users/cearc-sara/followers')
      .then((res) => {
        console.log(res.data)
       this.setState({
           followers: res.data
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
        <img src={this.state.followers.image} alt='profile pic' className='image'/>
        <div className='card-info'>
          <h3 className='name'>{this.state.followers.name}</h3>
          <p className='username'>{this.state.followers.username}</p>
          
          <p>Profile: 
            <a href={this.state.followers.profile} className='profile-link'> {this.state.followers.profile}</a></p>
          
        </div>
    </Card>
    )
    }
  }
  
  export default Followers;
  