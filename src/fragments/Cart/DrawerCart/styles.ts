import theme from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
    borderTopColor: theme.colors.neutral100,
    borderTopWidth: 2,
  },
  cartContainer: {
    gap: 8,
    padding: 8,
  },
  cartItem: {
    gap: 4,
  },
  cartItemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  singleLineTitle: {
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
  },
  productInfoCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    gap: 8,
    paddingBottom: 32,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutInfo: {
    borderTopColor: theme.colors.neutral200,
    borderTopWidth: 2,
    paddingVertical: 8,
  },
});
