import { View, Text, StyleSheet } from 'react-native';

import { IError } from './model';

export function Error({ message }: IError) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Something went wrong</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16, fontWeight: '600' },
});
