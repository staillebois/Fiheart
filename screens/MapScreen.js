import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapScreen extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 46.690395,
         longitude: 5.638701,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
         >
      <MapView.Marker
            coordinate={{latitude: 46.690395,
            longitude: 5.638701,}}
            title={"Cascades des Tufs"}
            description={"100K"}
         />
        </MapView>
    )
  }
}

export default MapScreen