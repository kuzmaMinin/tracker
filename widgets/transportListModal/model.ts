import { ReactNode } from 'react';

export interface IModal {
  isModalVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}
