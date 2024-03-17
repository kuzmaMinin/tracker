import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { fetchTransportList } from './api';

import { Button } from '@/entities/Button';
import { ScreenWrapper } from '@/entities/screenWrapper';
import {
  ETransportType,
  toMarkerEntity,
  toTransportEntity,
} from '@/entities/transportEntity';
import { Error } from '@/widgets/error';
import { Filter } from '@/widgets/filter';
import { Loader } from '@/widgets/loader';
import { Map } from '@/widgets/map';
import { TransportItemsList } from '@/widgets/transportItemsList';
import { TransportListModal } from '@/widgets/transportListModal';

export function TransportListScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [transportType, setTransportType] = useState<ETransportType>(
    ETransportType.All
  );
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['items', transportType],
    queryFn: () => fetchTransportList(transportType),
  });

  function handleFilterAppy(transportType: ETransportType) {
    setTransportType(transportType);
  }

  function handleItemPress({
    driverId,
    category,
    latitude,
    longtitude,
  }: {
    driverId: string;
    category: string;
    latitude: string;
    longtitude: string;
  }) {
    router.navigate({
      pathname: '/(drawer)/(stack)/detail',
      params: { driverId, category, latitude, longtitude },
    });
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <ScreenWrapper>
      <Filter onFilterApply={handleFilterAppy} />
      {isPending ? (
        <Loader />
      ) : (
        <TransportItemsList
          data={toTransportEntity(data)}
          onPress={handleItemPress}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={() => setModalVisible(true)} name="globe" />
        <TransportListModal
          isModalVisible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <Map markers={toMarkerEntity(data)} fit />
        </TransportListModal>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '10%',
    zIndex: 100,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
