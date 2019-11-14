import React from "react";
import FloodComponent from "./FloodComponent";
import HospitalComponent from "./HospitalComponent";
import MapGL from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import InformationModal from "./InformationModal";
import "./App.css";

class App extends React.Component {
  state = {
    showHospitals: true,
    showFlooding: true,
    viewport: {
      latitude: 7.4325701,
      longitude: 80.2125944,
      zoom: 6
    }
  };
  toggleFloodLayer = () => {
    this.setState({ showFlooding: !this.state.showFlooding });
  };

  toggleHospitalLayer = () => {
    this.setState({ showHospitals: !this.state.showHospitals });
  };

  render() {
    return (
      <div className="app-div">
        <header className="button-div">
          <button className="info-button" onClick={this.toggleFloodLayer}>
            Show Flood Mapping
          </button>
          <button className="info-button" onClick={this.toggleHospitalLayer}>
            Show Hospital Locations
          </button>
        </header>
        <InformationModal />
        <MapGL
          className="map"
          style={{ width: "100%", height: "100vh" }}
          mapStyle="mapbox://styles/mapbox/outdoors-v9"
          accessToken="pk.eyJ1IjoiZGFsbGFzYmlsbGUiLCJhIjoiY2p6OHR1aGhoMDZnZDNjbXB2ZWZlcXFudCJ9.gjjYkOkTtA-Qe1jhbvF2gQ"
          onViewportChange={viewport => this.setState({ viewport })}
          {...this.state.viewport}
        >
          {this.state.showFlooding ? <FloodComponent /> : null}
          {this.state.showHospitals ? <HospitalComponent /> : null}
        </MapGL>
      </div>
    );
  }
}

export default App;
