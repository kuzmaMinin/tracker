import { FontAwesome } from '@expo/vector-icons';
import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native';

import { IModal } from './model';

export function TransportListModal({
  isModalVisible,
  onClose,
  children,
}: IModal) {
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <FontAwesome size={30} name="close" />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: '5%',
    zIndex: 100,
  },
});
