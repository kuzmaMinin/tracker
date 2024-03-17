import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

import { ITranslator } from './model';

export function Translator({ textPath, styles }: ITranslator) {
  const { t } = useTranslation();

  return <Text style={styles}>{t(textPath)}</Text>;
}
