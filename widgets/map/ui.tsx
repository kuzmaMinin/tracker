import { FontAwesome } from '@expo/vector-icons';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { IMap } from './model';

import { ETransportType } from '@/entities/transportEntity';

function mapMarkerName(category: ETransportType) {
  switch (category) {
    case ETransportType.Cargo:
      return 'truck';
    case ETransportType.Passenger:
      return 'car';
    case ETransportType.Special:
      return 'space-shuttle';
    default:
      return 'location-dot';
  }
}

export function Map({ markers, fit = false }: IMap) {
  const mapRef = useRef<MapView | null>(null);

  function handleLayout(isFitted: boolean) {
    if (isFitted) {
      const padding = 30;
      mapRef.current?.fitToElements({
        edgePadding: {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding,
        },
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      onLayout={() => handleLayout(fit)}
      ref={mapRef}
      showsScale
    >
      {markers.map((marker) => (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longtitude,
          }}
          key={marker.id}
        >
          <FontAwesome
            size={20}
            name={
              mapMarkerName(
                marker.category
              ) as keyof typeof FontAwesome.glyphMap
            }
          />
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
