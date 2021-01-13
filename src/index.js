import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

import App from "./App.js"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
