import React from "react";
import ReactModal from "react-modal";
import floodInfo from "./cloudToStreetResources/flood-info.json";
import precipitationInfo from "./cloudToStreetResources/precipitation.json";
class InformationModal extends React.Component {
  state = {
    modalToggle: false
  };

  modalToggleState = () => {
    console.log(this.state.modalToggle);
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  };

  loadFloodDetails = () => {
    const details = floodInfo[0];
    console.log(details);
    return (
      <div>
        <h3>Flood Details</h3>
        <p>Began: {details.Began}</p>
        <p>Ended: {details.Ended}</p>
        <p>Area Flooded: {details.areaFlooded}</p>
        <p>Population Exposed: {details.popExposed}</p>
      </div>
    );
  };
  loadPrecipitationInfo = () => {
    console.log(precipitationInfo);
    return precipitationInfo.map(info => {
      return (
        <div>
          <p key={info.date}>
            Date: {info.date}, Precipitation: {info.precip}
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
