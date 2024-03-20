import TextView from '@/components/TextView';
import {ProductItemProps} from '@/types/Product';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

interface CartItemFragmentsProps {
  data: ProductItemProps;
}

export default function CheckoutItemView({data}: CartItemFragmentsProps) {
  return (
    <View key={data.id} style={styles.base}>
      <View style={styles.productInfoCount}>
        <FastImage
          style={styles.image}
          source={{
            uri: data.image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.checkoutItem}>
          <TextView singleLine={false}>{data.title}</TextView>
          <TextView fw="bold" capitalize={false}>
            {data.count} x ${data.price}
          </TextView>
        </View>
      </View>
    </View>
  );
}
