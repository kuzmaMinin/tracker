import { ITransferEntity } from '@/entities/transportEntity';

export interface ITransportItemsList {
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
  data: ITransferEntity[];
}
