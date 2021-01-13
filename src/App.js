import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Posts from "./components/Posts"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import { getPosts } from "./utils/httpService"
import Logout from "./components/Logout"
import Register from "./components/Register"
import Profile from "./components/Profile"

class App extends Component {
  state = {
    posts: null,
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts: posts })
  }

  render() {
    return (
      <>
        <ToastContainer />
        <Navbar />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Posts {...props} posts={this.state.posts} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App
