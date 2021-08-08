
import React, { Component } from 'react'
import Table from "./Components/Table"
import "./App.css"
import {Tab,TabContainer,Row,Nav,Col} from "react-bootstrap"
export default class App extends Component {
  render() {
    return (
      <div>
      <Table heading="Task Timings"/>
      </div>
    )
  }
}

