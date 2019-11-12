import React from "react";
import { Source, Layer, FeatureState, Popup } from "@urbica/react-map-gl";
import sriLankaJSON from "./cloudToStreetResources/sri-lanka_hospitals_osm.json";

class HospitalComponent extends React.Component {
  state = {
    hoveredHospital: null,
    popupCoords: []
  };
  onOpen = event => {
    const hospital = event.features[0].properties;
    const coordsArray = [event.lngLat.lng, event.lngLat.lat];
    this.setState({ popupCoords: coordsArray });
    this.setState({ hoveredHospital: hospital });
  };

  closePopup = () => {
    this.setState({ hoveredHospital: null });
    this.setState({ popupCoords: [] });
  };
  render() {
    return (
      <React.Fragment>
        <Source id="geojson" type="geojson" data={sriLankaJSON} />
        <Layer
          id="hospitals"
          type="symbol"
          source="geojson"
          layout={{ "icon-image": "hospital-15" }}
          onClick={this.onOpen}
        />
        {this.state.hoveredHospital && (
          <FeatureState
            id={this.state.hoveredHospital.osm_id}
            source="geojson"
            state={{ hover: true }}
          />
        )}
        {this.state.hoveredHospital !== null ? (
          <Popup
            id={this.state.osm_id}
            longitude={this.state.popupCoords[0]}
            latitude={this.state.popupCoords[1]}
            closeButton={this.closePopup}
            onClose={this.closePopup}
          >
            {this.state.hoveredHospital.name}
          </Popup>
        ) : null}
      </React.Fragment>
    );
  }
}

export default HospitalComponent;
