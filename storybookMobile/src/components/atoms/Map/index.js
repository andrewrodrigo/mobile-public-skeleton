/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = (props) => {
  const {
    initialRegion,
    region,
    width,
    height,
    markers,
    markerImages,
  } = props;

  const [changedRegion, setRegion] = useState({});

  const mapStyle = {
    width: width || Dimensions.get('window').width,
    height: height || Dimensions.get('window').height,
  };

  return (
    <MapView
      style={mapStyle}
      initialRegion={initialRegion}
      region={region}
      onRegionChange={(newRegion) => {
        setRegion(newRegion);
      }}
    >
      {markers && markers.map((marker) => (
        <Marker
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.title}
          description={marker.description}
        >
          <Image
            source={markerImages[marker.type]}
            style={{
              width: marker.width || 50,
              height: marker.height || 50,
            }}
            resizeMode="contain"
          />
        </Marker>
      ))}

    </MapView>
  );
};

Map.defaultProps = {
  initialRegion: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export default Map;
