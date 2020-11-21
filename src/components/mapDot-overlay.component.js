import React from 'react';
import axios from 'axios';
//import { TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import {TableContext} from '../table-context';
import 'leaflet/dist/leaflet.css'



class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapPoints: [],
    };
  }

  componentDidMount() {

    // Initialize the map
    var map = Leaflet.map('mapID', {
      scrollWheelZoom: true
    });

    // Set the position and zoom level of the map
    map.setView([29.649, -82.348], 16);
   

    //	Variety of base layers 
    var osm_mapnik = Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    // Set base layers
    var esri_NatGeoWorldMap = Leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
      maxZoom: 19
    });


    var esri_WorldImagery = Leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Create base layers group object
    var baseLayers = {
      "OSM Mapnik ": osm_mapnik,
      "ESRI National Geographic": esri_NatGeoWorldMap,
      "ESRI World Imagery": esri_WorldImagery
    };

    // Adding an Icon to point on map

    // var greenIcon = Leaflet.icon({
    //     iconUrl: 'https://img.icons8.com/clouds/2x/cloud-network.png',
    //     iconSize:    [39, 39],
    //     iconAnchor:  [18, 39],
    //     popupAnchor: [10, -35]
    // });

    // var eisenstadt = Leaflet.marker([47.845993, 16.527337],  {icon: greenIcon}).bindPopup('<b>Eisenstadt, Burgenland</b>');


    // var capitals = Leaflet.layerGroup([eisenstadt]).addTo(map);
                                       // ^^^^^^^^^ THIS Will BE AN ARRAY
    // var overlays = {
    //   'Capitals': capitals
    // };


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var markerParams = {
            radius: 4,
            fillColor: 'red',
            color: '#fff',
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.8
    };

    //var mapDOTs = Leaflet.circleMarker([48.307025, 14.284829],markerParams).bindPopup('<b>SUPER COOL</b>').addTo(map);

    // var mapDOTs  = Leaflet.circleMarker([29.652,  -82.348],markerParams).bindPopup('<b>SUPER COOL</b>').addTo(map);
    // var mapDOTs2 = Leaflet.circleMarker([29.6522, -82.345],markerParams).bindPopup('<b>SUPER COOL</b>').addTo(map);
    console.log('Map has mounted');

    axios.get('http://localhost:3000/api/employees/select/?proj=latitude, longitude&att=state&con=12')
    // axios.get('http://localhost:3000/api/employees/')
      .then(response => {
        console.log('Map call complete');
        this.setState({mapPoints: response.data});
        console.log('Map object below:')
        console.log(this.state.mapPoints);
        console.log('map object end');
        console.log(this.state.mapPoints.length);

        for (var i=0;i<(this.state.mapPoints.length);i++) {
          if (this.state.mapPoints[i].LATITUDE != null && this.state.mapPoints[i].LONGITUDE != null) {
            Leaflet.circleMarker([this.state.mapPoints[i].LATITUDE,  this.state.mapPoints[i].LONGITUDE],markerParams).bindPopup('Fatality').addTo(map);
          }
        }
      });

    // for (var i=0;i<(this.state.mapPoints.length);i++) {
    //   console.log(i);
    //   Leaflet.circleMarker([this.state.mapPoints[i].latitude,  this.state.mapPoints[i].longitude],markerParams).bindPopup('<b>SUPER COOL</b>').addTo(map);
    // }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add baseLayers and overlays to layer panel
    Leaflet.control.layers(baseLayers).addTo(map);
  }

  render() {
    return (
        <div id="mapID"> </div>
    )
  }
}
Map.contextType = TableContext;

export default Map;