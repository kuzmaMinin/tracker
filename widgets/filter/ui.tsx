import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View } from 'react-native';

import { IFilter } from './model';

import { ETransportType } from '@/entities/transportEntity';

export function Filter({ onFilterApply }: IFilter) {
  const { t } = useTranslation();
  const [transportType, setTransportType] = useState(ETransportType.All);

  return (
    <View style={{ marginBottom: 20 }}>
      <Picker selectedValue={transportType} onValueChange={setTransportType}>
        <Picker.Item
          label={t('transportList.cargo')}
          value={ETransportType.Cargo}
        />
        <Picker.Item
          label={t('transportList.passenger')}
          value={ETransportType.Passenger}
        />
        <Picker.Item
          label={t('transportList.special')}
          value={ETransportType.Special}
        />
        <Picker.Item
          label={t('transportList.all')}
          value={ETransportType.All}
        />
      </Picker>

      <Button
        title={t('transportList.applyFilter')}
        onPress={() => onFilterApply(transportType)}
      />
    </View>
  );
}
