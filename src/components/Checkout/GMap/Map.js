import React, { useState } from "react";
import ReactDOM from "react-dom";

// We will use these things from the lib
// https://react-google-maps-api-docs.netlify.com/
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

const style = {
  height: "70vh",
  width: "100%"
};

// The places I want to create markers for.
// This could be a data-driven prop.
const myPlaces = [
  { id: "place1", pos: { lat: 22.5726, lng: 88.3639 } },
  { id: "place2", pos: { lat:17.3850, lng: 78.4867 } },
  { id: "place3", pos: { lat: 19.0760, lng: 72.8777 } }
];

function Map() {
  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({ lat: 44.076613, lng: -98.362239833 });
  const [zoom, setZoom] = useState(5);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  // Iterate myPlaces to size, center, and zoom map to contain all markers
  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds();
    myPlaces.map(place => {
      bounds.extend(place.pos);
      return place.id;
    });
    map.fitBounds(bounds);
  };

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    console.log(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // If you want to zoom in a little on marker click
    if (zoom < 13) {
      setZoom(13);
    }

    // if you want to center the selected Marker
    //setCenter(place.pos)
  };

  return (
    <LoadScript>
      <GoogleMap
        // Do stuff on map initial laod
        onLoad={loadHandler}
        // Save the current center position in state
        //onCenterChanged={() => setCenter(mapRef.getCenter().toJSON())}
        // Save the user's map click position
        onClick={e => setClickedLatLng(e.latLng.toJSON())}
        center={center}
        zoom={zoom}
        mapContainerStyle={style}
      >
        {myPlaces.map(place => (
          <Marker
            key={place.id}
            position={place.pos}
            onLoad={marker => markerLoadHandler(marker, place)}
            onClick={event => markerClickHandler(event, place)}
            // Not required, but if you want a custom icon:
          />
        ))}

        {infoOpen && selectedPlace && (
          <InfoWindow
            anchor={markerMap[selectedPlace.id]}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div>
              <h3>{selectedPlace.id}</h3>
              <div>This is your info window content</div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      {/* Our center position always in state
      <h3>
        Center {center.lat}, {center.lng}
      </h3>

      {/* Position of the user's map click */}
      {/* {clickedLatLng && ( */}
        {/* <h3>
          You clicked: {clickedLatLng.lat}, {clickedLatLng.lng}
        </h3>
      )} */}

      {/* Position of the user's map click */}
      {/* {selectedPlace && <h3>Selected Marker: {selectedPlace.id}</h3>} */} 
    </LoadScript>
  );
}

export default Map