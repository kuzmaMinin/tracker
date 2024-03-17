import { ScreenWrapper } from '@/entities/screenWrapper';
import { LanguageSelector } from '@/widgets/languageSelector';

export function SettingsScreen() {
  return (
    <ScreenWrapper>
      <LanguageSelector />
    </ScreenWrapper>
  );
}
