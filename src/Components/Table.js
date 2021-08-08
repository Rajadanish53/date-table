import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Table.css";
import RowItem from "./RowItem";
export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Container className="border text-center">
        <Row sm={1}>
          <Col className="table__heading">
            <h1>{this.props.heading}</h1>
          </Col>
          <Col>
            <RowItem initialTime={"01:00"} finalTime={"02:00"} interval={20} />
            {/* <RowItem initialTime={"01:00"} finalTime={"02:30"} interval={10}/> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
