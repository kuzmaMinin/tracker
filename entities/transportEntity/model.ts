import { TFunction } from 'i18next';

import { IMarker } from '@/widgets/map/model';

export interface ITransferEntityDTO {
  transportNumber: string;
  driverName: string;
  category: ETransportType;
  id: string;
  driverId: string;
  latitude: string;
  longtitude: string;
}

export interface ITransferEntity {
  transportNumber: string;
  driverName: string;
  category: ETransportType;
  driverId: string;
  latitude: string;
  longtitude: string;
}

export enum ETransportType {
  Cargo = 'cargo',
  Passenger = 'passenger',
  Special = 'special',
  All = '',
}

export function toTransportEntity(
  transportEntityDTOs: ITransferEntityDTO[]
): ITransferEntity[] {
  if (!transportEntityDTOs?.length) {
    return [];
  }

  return transportEntityDTOs.map((item) => ({
    id: item.id,
    transportNumber: item.transportNumber,
    driverName: item.driverName,
    category: item.category,
    driverId: item.driverId,
    latitude: item.latitude,
    longtitude: item.longtitude,
  }));
}

export function toMarkerEntity(
  transportEntityDTOs?: ITransferEntityDTO[]
): IMarker[] {
  if (!transportEntityDTOs?.length) {
    return [];
  }

  return transportEntityDTOs.map((item) => ({
    id: item.id,
    latitude: Number(item.latitude),
    longtitude: Number(item.longtitude),
    category: item.category,
  }));
}

export function mapTransportCategory(category: ETransportType, f: TFunction) {
  switch (category) {
    case ETransportType.Cargo:
      return f('transportList.cargo');
    case ETransportType.Passenger:
      return f('transportList.passenger');
    case ETransportType.Special:
      return f('transportList.special');
    default:
      return 'UNKNOWN';
  }
}
