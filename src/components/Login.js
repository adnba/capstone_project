import React, { Component } from "react"

import { login } from "../utils/httpService"

class Login extends Component {
  state = { email: "", password: "" }
  handleSubmit = e => {
    e.preventDefault()
    login(this.state)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-5">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
