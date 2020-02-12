import React,{ useState } from 'react'
import MapGL, {Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN="pk.eyJ1IjoibWlpa2tha3IiLCJhIjoiY2s2ZjJ6bGw4MGpzazNkcXB5ZXZ3aWc5ZiJ9.yXrQeEmRmdZdskrElLI8Qg"



const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 65.013,
    longitude: 25.47,
    zoom: 16
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 500 })
  
  return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <Marker longitude={25.473} latitude={65.013}>
        <div style={{color: 'black'}}>TEST</div>
        </Marker>

      </MapGL>
  )
}

export default Map