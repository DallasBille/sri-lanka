import React from "react";
import ReactModal from "react-modal";
import floodInfo from "./cloudToStreetResources/flood-info.json";
import precipitationInfo from "./cloudToStreetResources/precipitation.json";
class InformationModal extends React.Component {
  state = {
    modalToggle: false
  };

  modalToggleState = () => {
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  };

  dateFormatter = date => {
    var stringDate = date.toString();
    var year = stringDate.substring(0, 4);
    var month = stringDate.substring(4, 6);
    var day = stringDate.substring(6, 8);
    const dateFormat = [day, month, year].join("/");
    return dateFormat;
  };

  loadFloodDetails = () => {
    const details = floodInfo[0];
    return (
      <div>
        <h3>Flood Details</h3>
        <p>
          <u>Began:</u> {details.Began}
        </p>
        <p>
          <u>Ended:</u> {details.Ended}
        </p>
        <p>
          <u>Area Flooded:</u> {details.areaFlooded} Sq. Kilometers
        </p>
        <p>
          <u>Population Exposed:</u> {details.popExposed} people
        </p>
      </div>
    );
  };
  loadPrecipitationInfo = () => {
    return precipitationInfo.map(info => {
      return (
        <div>
          <p key={info.date}>
            <u>Date:</u> {this.dateFormatter(info.date)}, <u>Precipitation:</u>{" "}
            {info.precip} Centimeters
          </p>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <button className="info-button" onClick={this.modalToggleState}>
          Precipitation and Flood Information
        </button>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.modalToggle}
          overlayClassName="Overlay"
        >
          <p>
            <button onClick={this.modalToggleState}>close</button>
          </p>
          {this.loadFloodDetails()}
          <h3>Precipitation Details</h3>
          {this.loadPrecipitationInfo()}
        </ReactModal>
      </React.Fragment>
    );
  }
}
export default InformationModal;
