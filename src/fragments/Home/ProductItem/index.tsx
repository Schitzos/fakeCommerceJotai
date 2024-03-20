import TextView from '@/components/TextView';
import {RootStackParamList} from '@/navigation/types';
import {ProductItemProps} from '@/types/Product';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface ProductItemFragmentsProps {
  data: ProductItemProps;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export function ProductItem({data, navigation}: ProductItemFragmentsProps) {
  const {title, image, price, rating} = data;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', {data: data})}>
      <View style={styles.productInfo}>
        <FastImage
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <TextView singleLine={true}>{title}</TextView>
      </View>
      <View style={styles.productBottomInfo}>
        <TextView fz={12} fw="600">
          ${price}
        </TextView>
        <TextView>
          {rating.rate}/{rating.count} Review
        </TextView>
      </View>
    </TouchableOpacity>
  );
}

export default memo(ProductItem);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 125,
    height: 200,
  },
  productInfo: {
    flex: 1,
    width: '100%',
    gap: 8,
    alignItems: 'center',
  },
  productBottomInfo: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
