import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { IButton } from './model';

export function Button({
  onPress,
  name,
  color = '#2196F3',
  size = 50,
}: IButton) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome size={size} name={name} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
