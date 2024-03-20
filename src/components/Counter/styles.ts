import theme from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  btnCounter: {
    borderWidth: 1,
    borderColor: theme.colors.neutral200,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
