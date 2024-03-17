import { useTranslation } from 'react-i18next';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { TransportItemType } from './model';

import { mapTransportCategory } from '@/entities/transportEntity';
import { TransportLine } from '@/entities/transportLine';

export function TransportItem({
  transportNumber,
  driverName,
  driverId,
  category,
  latitude,
  longtitude,
  onPress,
}: TransportItemType) {
  const { t } = useTranslation();
  const prefix = t('transportList.transportPrefix');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({ driverId, category, latitude, longtitude })}
    >
      <TransportLine
        caption={t('transportList.transportNumberCaption')}
        value={`${prefix} ${transportNumber}`}
      />
      <TransportLine
        caption={t('transportList.transportDriverCaption')}
        value={driverName}
      />
      <TransportLine
        caption={t('transportList.transportCategoryCaption')}
        value={mapTransportCategory(category, t)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});
