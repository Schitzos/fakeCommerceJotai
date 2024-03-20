import theme from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    position: 'relative',
    backgroundColor: theme.colors.white,
  },
  cartContainer: {
    gap: 8,
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutInfo: {
    borderTopColor: theme.colors.neutral200,
    borderTopWidth: 2,
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 8,
  },
});
