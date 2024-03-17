import { StyleSheet } from 'react-native';

import { ICaption } from './model';

import { Translator } from '@/entities/translator';

export function Caption({ text }: ICaption) {
  return <Translator textPath={text} styles={styles.common} />;
}

const styles = StyleSheet.create({
  common: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
