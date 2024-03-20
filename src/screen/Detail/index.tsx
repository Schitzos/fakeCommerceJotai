import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/navigation/types';
import {HeaderNavigation} from '@/components/HeaderNavigation';
import Cart from '@/components/Cart';
import {ProductDetail} from '@/fragments/Detail/ProductDetail';
import FloatingAddToCart from '@/fragments/Detail/FloatingAddToCart';
import {styles} from './styles';

type DetailScreenProps = {
  route: any;
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
};

export default function Detail({route}: DetailScreenProps) {
  const {data} = route.params;

  return (
    <View style={styles.base}>
      <HeaderNavigation
        backShown={true}
        title="Product Detail"
        rightSection={Cart}
      />
      <ProductDetail data={data} />
      <FloatingAddToCart data={data} />
    </View>
  );
}
