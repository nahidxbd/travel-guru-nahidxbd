import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 21.9497 ,
      lng:  89.1833
      
    },
    zoom: 11
  };

  render() {
    return (


      <div style={{ height: '90vh', width: '90%', marginTop: "60px" }}>
        <GoogleMapReact

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.9497}
            lng={89.1833}
            
            

            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;