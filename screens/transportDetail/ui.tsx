import { useQuery } from '@tanstack/react-query';
import * as Linking from 'expo-linking';
import { useLocalSearchParams } from 'expo-router';
import i18next from 'i18next';
import { StyleSheet, View } from 'react-native';

import { fetchDriverById } from './api';

import { Button } from '@/entities/Button';
import {
  ETransportType,
  ITransferEntityDTO,
  mapTransportCategory,
  toMarkerEntity,
} from '@/entities/transportEntity';
import { TransportLine } from '@/entities/transportLine';
import { Error } from '@/widgets/error';
import { Loader } from '@/widgets/loader';
import { Map } from '@/widgets/map';

export function TransportDetailScreen() {
  const { t } = i18next;
  const { category, driverId, latitude, longtitude } = useLocalSearchParams<{
    category: ETransportType;
    driverId: string;
    latitude: string;
    longtitude: string;
  }>();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['driver', driverId],
    queryFn: () => fetchDriverById(driverId),
  });

  if (isError) {
    return <Error message={error.message} />;
  }

  const phoneNumber = data?.length ? data[0].phone : '';
  const name = data?.length ? data[0].name : '';
  const message = t('transportDetail.message');

  function callPhone() {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  function writeWhatsapp() {
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    ).catch((e) => {
      console.log('something went wrong', e);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map
          markers={toMarkerEntity([
            {
              id: (data && data[0].id) ?? Date.now().toString(),
              category,
              latitude,
              longtitude,
            } as ITransferEntityDTO,
          ])}
        />
      </View>
      <View style={styles.driverContainer}>
        {isPending ? (
          <Loader />
        ) : (
          <View style={styles.linesContainer}>
            <TransportLine
              caption={t('transportList.transportCategoryCaption')}
              value={mapTransportCategory(category, t)}
              fontSize={18}
            />
            <TransportLine
              caption={t('transportList.transportDriverCaption')}
              value={name}
              fontSize={18}
            />
            <TransportLine
              caption={t('transportDetail.phoneNumberCaption')}
              value={phoneNumber}
              fontSize={18}
            />
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={callPhone} name="phone" />
        <Button onPress={writeWhatsapp} name="whatsapp" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 3, position: 'relative' },
  driverContainer: {
    flex: 1,
  },
  linesContainer: {
    padding: 10,
  },
  mapContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    zIndex: 100,
  },
});
