import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import boy from '../assets/marker/boy.png'
import girl from '../assets/marker/girl.png'
import youboy from '../assets/marker/youboy.png'
import Cardinfo from '../components/ChatNowCard'
import InfoWindowEx from './InfoWindowEx';

 var markers = [
    {
      id: 18832,
      lac: 60486,
      cellid: 612,
      lat: -5.0877107,
      lon: -42.8066785,
      carrier: 'TIM',
      condition: 'normal',
      estate: '',
      connections: '1',
    },
    {
      id: 2140,
      lac: 55355,
      cellid: 16171,
      lat: -29.6185392,
      lon: -53.5877152,
      carrier: 'VIVO',
      condition: 'normal',
      estate: '',
      connections: '1',
    },
    {
      id: 2139,
      lac: 54855,
      cellid: 18472,
      lat: -27.3136321,
      lon: -53.598205,
      carrier: 'VIVO',
      condition: 'normal',
      estate: '',
      connections: '7',
    }];

   
export class MapContainer extends React.Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        position: null
    };
    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    showDetails = place => {
        console.log("you clicked");
      };
  render() {
    return (
         <div className={this.props.className}>
      <Map
      
                                        className={this.props.className}
                                        google={this.props.google}
                                        onClick={this.onMapClicked}
                                        zoom={12}
                                        style={{height: '60vh', width: '60vw'}}        
                                        >

                                        <Marker
                                        title={'You'}
                                        name={'You'}
                                        position={{lat: 37.778519, lng: -122.405640}} 
                                        onClick={this.onMarkerClick}
                                        icon={{ url: youboy }}
                                         />
                                        
                                        <Marker
                                            name={'F 40'}
                                            title={'Female 40years'}
                                            position={{lat: 37.759703, lng: -122.428093}}
                                            onClick={this.onMarkerClick}
                                            icon={{ url: girl }}
                                        />
                                       
                                                
          
                                        <Marker name="F 28"
                                        title={'Female 28years'}
                                        position ={{ lat: 37.762391, lng: -122.439192}}
                                        icon={{ url: girl }}
                                         onClick={this.onMarkerClick} 
                                        />
                                        
                                         <Marker
                                        title={'Male 24years'}
                                        name={'M 24'}
                                        position={{lat: 37.762300, lng: -122.405680}} 
                                        onClick={this.onMarkerClick}
                                        icon={{ url: boy }}
                                        />

                                        <InfoWindowEx
                                            marker={this.state.activeMarker}
                                            onClose={this.onInfoWindowClose}
                                            visible={this.state.showingInfoWindow}>
                                            {/* <div>
                                                <h3>{this.state.selectedPlace.name}</h3>

                                            </div> */}
                                            
                                            <Cardinfo redirectTo={this.props.redirectTo} detail={this.state.selectedPlace} />
                                            {/* <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <button
                type="button"
                onClick={this.showDetails.bind(this, this.state.selectedPlace)}
              >
                Show details
              </button>
            </div> */}
                                        </InfoWindowEx>
                                    </Map>
                                    </div>
                               );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBt5F_65miIiCpSgOEmbg3hACbgU0RwZas')
})(MapContainer)