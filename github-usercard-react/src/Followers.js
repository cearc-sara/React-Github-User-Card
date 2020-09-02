import React from 'react'
import axios from 'axios'
import { Card, Avatar, CardHeader } from '@material-ui/core'

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
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
            <>
            {
                this.state.followers.map((follower) => {
                    return(
                        <Card variant='outlined' className='follower-card'>
                            <h3>{follower.name}</h3>
                            <img src={follower.avatar_url} alt='follower pic' className='image'/>
                            <div className='card-info'>
                            <p className='username'>{follower.login}</p>
                            <p>Profile: 
                                <a href={follower.url} className='profile-link'> {follower.url}</a></p>
                            </div>
                        </Card>
                    )
                })
            }
            </>
        )
    }
}
  export default Followers;
