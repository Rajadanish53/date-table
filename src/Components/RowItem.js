import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ModalBox from "./Modal";
import HamModal from "./HamModal";

export default class RowItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfIntervals: 0,
      initialTime:"",
      finalTime:"",
      invalidInterval:false,
    };
    this.modalRef = React.createRef();
    this.hamModalRef = React.createRef();
    this.Columns = [];
  }
//show the modal box on click
  showModal = (e) => {
      console.log(this.state.numOfIntervals)
    this.modalRef.current.showHideModal(
      this.state.initialTime,
      this.state.finalTime,
      this.state.numOfIntervals
    );
  };
  showHamModal = (e) => {
      e.preventDefault();
    this.hamModalRef.current.showHideModal(
      this.state.initialTime,
      this.state.finalTime,
      this.state.numOfIntervals
    );
  };
  //method to convert time to AM AND PM FORMAT
  tConv24 = (time24) => {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };
  //method to calculate the time in intervals
  calculateTimeInterval = (first, second, interval = 0) => {
    var diff = Math.abs(
      new Date(`2021/8/9 ${second}`) - new Date(`2021/8/9 ${first}`)
    );
    var minutes = Math.floor(diff / 1000 / 60);
    let finalV = minutes / interval;
    function isFloat(n) {
      return Number(n) === n && n % 1 !== 0;
    }
    if (isFloat(finalV)) return false; //it means interval is not  valid
    return finalV;
  };
  componentDidMount() {
 //calculating the intervals
    let interval = this.calculateTimeInterval(
      this.props.initialTime,
      this.props.finalTime,
      this.props.interval
    );
    this.setState({ numOfIntervals: this.props.interval });
    //checking if interval is possible
    if (interval) {
           //converthing the time to am and pm formats
        this.setState({initialTime:this.tConv24(this.props.initialTime)})
        this.setState({finalTime:this.tConv24(this.props.finalTime)})
        
      for (let i = 0; i < interval; i++) {
        this.Columns.push(
          <Col
            className="row__item d-flex justify-content-center align-items-center"
            key={i*Math.random()+1 *3}
            onClick={this.showModal}
            onContextMenu={this.showHamModal}
          >
            NO DATA
          </Col>
        );
      }
    }
    else{
        this.setState({invalidInterval:true})
    }
  }
  render() {
    return (
      <Row sm={2} className="table__wrapper">
        <ModalBox ref={this.modalRef} />
        <HamModal ref={this.hamModalRef}/>
        <Col
          xs={3}
          className="d-flex flex-column justify-content-between column__name"
        >
          <span className="initial">{this.state.initialTime}</span>
          <span className="final">{this.state.finalTime}</span>
        </Col>
        <Col xs={9} className="d-flex flex-column justify-content-between">
          <Row sm={1} className="d-flex h-100 w-100">
            {/* the number of rows to be rendered */}
            {this.state.invalidInterval ? <h1 className="my-auto">Invalid Interval Provided</h1>:this.Columns}
          </Row>
        </Col>
      </Row>
    );
  }
}
