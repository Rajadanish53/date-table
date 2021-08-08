import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modal.css";
export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      initialTime: "",
      finalTime: "",
      time: "",
    };
  }

  showHideModal = (initialTime, finalTime, time) => {
    console.log(initialTime, finalTime, time);
    this.setState({ initialTime, finalTime, time });
    this.setState({ modalShow: !this.state.modalShow });
  };
  //to show the modal
  MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        animation={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Row Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Starting Time: {this.state.initialTime}</p>
          <p>Final Time: {this.state.finalTime}</p>
          <p>Interval : {this.state.time}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  render() {
    return (
      <>
        <this.MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </>
    );
  }
}
