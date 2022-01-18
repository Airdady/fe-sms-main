import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";

const MapComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <>
        <Box style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAqqsAsLrZYiR_CfQb6GUpCZsKXqQlB3t4",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MapComponent lat={-81.3498212} lng={34.1659795} text="My Marker" />
          </GoogleMapReact>
        </Box>
      </>
    );
  }
}

export default SimpleMap;
