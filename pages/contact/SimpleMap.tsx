import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";

const MapComponent = ({lat, lng, text }: {lat:number, lng:number, text:any}) => <div>{text}</div>;

class SimpleMap extends Component <{}, any>{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 31,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <>
        <Box style={{ height: "24.7vh", width: "100%", padding: 3 }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAqqsAsLrZYiR_CfQb6GUpCZsKXqQlB3t4",
            }}
            defaultCenter={SimpleMap.defaultProps.center}
            defaultZoom={SimpleMap.defaultProps.zoom}
          >
            <MapComponent lat={-81.3498212} lng={34.1659795} text="My Marker" />
          </GoogleMapReact>
        </Box>
      </>
    );
  }
}

export default SimpleMap;
