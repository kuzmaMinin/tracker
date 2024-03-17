import { useTranslation } from 'react-i18next';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import { ILanguageRow } from './model';

import { ELanguages } from '@/locales/model';
import { Caption } from '@/widgets/caption';

function LanguageButton({ title, isActive, handlePress }: ILanguageRow) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isActive ? styles.activeState : styles.inActiveState,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.commonText,
          isActive ? styles.activeTextColor : styles.inActiveTextColor,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const language = i18n.language as ELanguages;

  function handlePressSelector() {
    const languageToChange =
      language === ELanguages.En ? ELanguages.Ru : ELanguages.En;
    i18n.changeLanguage(languageToChange);
  }

  return (
    <View style={[styles.selectorContainer]}>
      <Caption text="settings.selectLanguage" />
      <LanguageButton
        title="Русский"
        isActive={language === ELanguages.Ru}
        handlePress={handlePressSelector}
      />
      <LanguageButton
        title="English"
        handlePress={handlePressSelector}
        isActive={language === ELanguages.En}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectorContainer: {
    gap: 20,
  },
  buttonContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  activeState: {
    backgroundColor: '#2196F3',
  },
  inActiveState: {
    backgroundColor: 'white',
    borderWidth: 2,
  },
  commonText: {
    fontSize: 16,
  },
  activeTextColor: {
    color: 'white',
  },
  inActiveTextColor: {
    color: 'black',
  },
});
