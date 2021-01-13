import React, { Component } from "react"
import { toast } from "react-toastify"

import { register } from "../utils/httpService"

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    image: "",
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.password === this.state.passwordAgain) {
      register(this.state)
    } else {
      toast.error("password don't match")
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-5">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputUsername1"
              aria-describedby="usernameHelp"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputEmail1"
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Retype Password</label>
            <input
              name="passwordAgain"
              value={this.state.passwordAgain}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputImage">Image URL</label>
            <input
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              type="url"
              className="form-control"
              id="exampleInputImage"
              aria-describedby="imageHelp"
              required
            />
            <small id="imageHelp" class="form-text text-muted">
              Example: https://images.com/abcd.png
            </small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default Register
