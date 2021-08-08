import React, { Component, useContext } from "react";
import "./UserForm.css";
import Users from "./usersdata";
import { Consumer } from "./UserContext";
import { Form, Row, Col } from "react-bootstrap";
export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: true,
      userInfo: {
        name: "",
      },
    };
  }
  showData=(E)=>{
this.setState({userinfo:{
    name:E.target.value
}})
  }
  componentDidMount() {
  }

  render() {
    //   let {name,email,initialTime,finalTime,time} = this.state.userinfo
    return (
      <>
        <Row>
          <Col>
            <datalist id="users">
              {Users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </datalist>
           
            <Form.Control
              list="users"
              type="text"
              onChange={this.showData}
              value={this.state.name}
              placeholder="Enter UserName"
            />
        
          </Col>

          {this.state.showInfo && (
            <Row sm={2} className="mt-5">
              <Col>
          <p>Name:</p>
              </Col>
              <Col>
          <p>Email:</p>
              </Col>
              <Col>
          <p>Initial:  {<Consumer>
              {
                  user=>user.initialTime
              }
              </Consumer>}</p>
              </Col>
              <Col>
          <p>Final: {<Consumer>
              {
                  user=>user.finalTime
              }
              </Consumer>}</p>
              </Col>
              <Col>
                <p>Interval: {<Consumer>
              {
                  user=>user.interval
              }
              </Consumer>}</p>
              </Col>
            </Row>
          )}
        </Row>
      </>
    );
  }
}
