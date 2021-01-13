import React, { Component } from "react"
import { getProfile } from "../utils/httpService"
import Posts from "./Posts"
import User from "./User"

class Profile extends Component {
  state = {
    user: null,
    posts: null,
  }

  async componentDidMount() {
    const data = await getProfile()
    this.setState({ user: data.User, posts: data.Posts })
  }

  render() {
    let posts = null
    if (this.state.posts !== null)
      posts = this.state.posts.map(post => {
        return {
          post: post,
          user: this.state.user,
        }
      })
    return (
      <>
        <User user={this.state.user} />
        <Posts posts={posts} fromProfile={true} />
      </>
    )
  }
}

export default Profile
