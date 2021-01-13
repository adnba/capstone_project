import axios from "axios"
import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"

const endpointUrl = "https://aqueous-chamber-95142.herokuapp.com"

const getToken = () => {
  return localStorage.getItem("login-token")
}

const setToken = token => {
  localStorage.setItem("login-token", token)
}

const removeItem = () => {
  localStorage.removeItem("login-token")
}

export const login = async info => {
  try {
    const body = {
      user: info,
    }
    const data = await axios.post(endpointUrl + "/login", body)
    const token = data.headers.authorization
    setToken(token)
    window.location.replace("/")
  } catch (ex) {
    toast.error(ex.response.data.error)
  }
}

export const logout = () => {
  removeItem()
  window.location.replace("/")
}

export const loggedIn = () => {
  let loggedIn = false
  try {
    const token = getToken()
    const decoded = jwtDecode(token)
    if (decoded.exp > Date.now() / 1000) {
      loggedIn = true
    }
  } catch (ex) {}
  return loggedIn
}

export const register = async info => {
  const body = {
    user: info,
  }

  delete body.user.passwordAgain

  try {
    const data = await axios.post(endpointUrl + "/signup", body)
    const token = data.headers.authorization
    setToken(token)
    window.location.replace("/")
  } catch (ex) {
    toast.error("Please try again, registering failed")
  }
}

export const getPosts = async () => {
  const response = await axios.get(endpointUrl + "/posts")
  const posts = response.data.posts
  return posts
}

export const getProfile = async () => {
  const response = await axios.get(endpointUrl + "/profile", {
    headers: { authorization: getToken() },
  })
  return response.data
}
