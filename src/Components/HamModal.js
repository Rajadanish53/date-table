import React, { Component } from "react";
import Hamburger from "./Hamburger";
import { Modal, Button } from "react-bootstrap";
import {Provider} from "./UserContext"
export default class HamModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
    };
    
  }

  showHideModal = (initialTime, finalTime, time) => {
    this.setState({ initialTime, finalTime, time });
    this.setState({ modalShow: !this.state.modalShow });
  };
  MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        animation={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Provider value={{
            initialTime:this.state.initialTime,
            finalTime:this.state.finalTime,
            interval:this.state.time
          }}>
            <Hamburger />
          </Provider>
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
