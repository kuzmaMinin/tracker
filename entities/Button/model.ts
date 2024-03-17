import { FontAwesome } from '@expo/vector-icons';

export interface IButton {
  onPress: () => void;
  size?: number;
  name?: keyof typeof FontAwesome.glyphMap;
  color?: string;
}
