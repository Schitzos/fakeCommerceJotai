import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 16,
    borderTopWidth: 2,
    borderColor: '#EEEEEE',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    justifyContent: 'center',
    height: 136,
    position: 'absolute',
    bottom: 0,
    gap: 8,
    paddingVertical: 32,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productReviewInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
