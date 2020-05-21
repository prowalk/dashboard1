import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Spinner } from 'reactstrap'

const Maps = ({center, marker}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyD7C-d76gLzXCfX2we04QYktXEUehTJcOg" // ,
        // ...otherOptions
      })
    
      const onLoad = (mapInstance) => {
          console.log(mapInstance)
      }

      const onLoadMarker = (marker) => {
          console.log(marker)
      }

      
    const renderMap = () => {
        

        return(
            <div>
                <GoogleMap
                id='map'
                zoom={11}
                onLoad={onLoad}
                mapContainerStyle={{
                    height: "280px",
                  }}
                center={center}
                >
                {
                    marker.map((item)=> (
                        <Marker 
                        onLoad={onLoadMarker}
                        position={{
                            lat: item.lat,
                            lng: item.lng
                        }}
                        />
                    ))
                }
                
                </GoogleMap>
            </div>
        )
    }
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return  isLoaded ? renderMap() : <Spinner />

}


    

export default Maps

