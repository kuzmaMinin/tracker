import { ETransportType } from '@/entities/transportEntity';

export interface IFilter {
  onFilterApply: (transportType: ETransportType) => void;
}
