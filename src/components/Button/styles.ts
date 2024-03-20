import theme from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btnCart: {
    backgroundColor: theme.colors.neutral200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCartOutLine: {
    backgroundColor: theme.colors.white,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.neutral200,
    borderWidth: 1,
  },
  btnMD: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  btnSM: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  textOutLine: {},
});
