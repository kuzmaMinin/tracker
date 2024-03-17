import { View, Text, StyleSheet } from 'react-native';

import { ITransportLine } from './model';

export function TransportLine({ caption, value, fontSize }: ITransportLine) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.caption, { fontSize }]}>{caption}: </Text>
      </View>
      <View>
        <Text style={{ fontSize }}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  caption: {
    fontWeight: '600',
  },
});
