import React from "react";
import { Source, Layer } from "@urbica/react-map-gl";
const FloodComponent = props => {
  return (
    <React.Fragment>
      <Source
        id="raster"
        type="raster"
        tilesize={100}
        tiles={[
          "https://storage.googleapis.com/c2s_developer_exercise/SentinelCombo_20180516_20180612/{z}/{x}/{y}.png"
        ]}
      />
      <Layer id="anything" type="raster" source="raster" />
    </React.Fragment>
  );
};

export default FloodComponent;
