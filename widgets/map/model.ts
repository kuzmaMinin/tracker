import { ETransportType } from '@/entities/transportEntity';

export interface IMap {
  markers: IMarker[];
  fit?: boolean;
}

export interface IMarker {
  id: string;
  latitude: number;
  longtitude: number;
  category: ETransportType;
}
