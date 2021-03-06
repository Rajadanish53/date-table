import React, { Component } from "react";
import {Tab,Row,Col,Nav} from "react-bootstrap"
import "./Hamburger.css"
import UserForm from "./UserForm"
export default class Hamburger extends Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example " defaultActiveKey="first">
        <Row className="border-bottom">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <UserForm/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>Tab two</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h2>Tab three</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
