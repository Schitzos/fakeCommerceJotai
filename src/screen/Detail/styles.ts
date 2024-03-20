import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    position: 'relative',
  },
  topInfo: {
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
  },
  category: {
    fontSize: 16,
    textAlign: 'right',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    paddingVertical: 8,
    paddingBottom: 160,
    paddingHorizontal: 16,
    gap: 16,
  },
  productInfo: {
    flex: 1,
    gap: 16,
  },
  productCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
  },
  image: {
    width: 250,
    height: 350,
  },
  productReviewInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
