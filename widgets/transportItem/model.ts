import { ITransferEntity } from '@/entities/transportEntity';

interface ITransportItem {
  onPress: ({
    driverId,
    category,
    latitude,
    longtitude,
  }: {
    driverId: string;
    category: string;
    latitude: string;
    longtitude: string;
  }) => void;
}

export type TransportItemType = ITransferEntity & ITransportItem;
