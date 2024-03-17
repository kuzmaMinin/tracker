import { View, StyleSheet } from 'react-native';

import { IScreenWrapper } from './model';

export function ScreenWrapper({ children }: IScreenWrapper) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
});
