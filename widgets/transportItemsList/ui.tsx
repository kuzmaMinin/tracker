import { VirtualizedList } from 'react-native';

import { ITransportItemsList } from './model';

import {
  ITransferEntity,
  ITransferEntityDTO,
} from '@/entities/transportEntity';
import { TransportItem } from '@/widgets/transportItem';

export function TransportItemsList({ onPress, data }: ITransportItemsList) {
  function getItem(data: ITransferEntityDTO[], index: number) {
    return {
      id: data[index].id,
      transportNumber: data[index].transportNumber,
      driverName: data[index].driverName,
      category: data[index].category,
      driverId: data[index].driverId,
      latitude: data[index].latitude,
      longtitude: data[index].longtitude,
    };
  }

  return (
    <VirtualizedList
      data={data}
      initialNumToRender={10}
      renderItem={({ item }: { item: ITransferEntity }) => (
        <TransportItem
          transportNumber={item.transportNumber}
          driverName={item.driverName}
          category={item.category}
          driverId={item.driverId}
          latitude={item.latitude}
          longtitude={item.longtitude}
          onPress={onPress}
        />
      )}
      keyExtractor={(item) => item.id}
      getItem={getItem}
      getItemCount={() => data.length}
    />
  );
}
