import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getListProduct} from '@/services/product/product.service';
import Product from '@/fragments/Home/Product';
import {ProductItemProps} from '@/types/Product';
import Cart from '@/components/Cart';
import {HeaderNavigation} from '@/components/HeaderNavigation';
import {RootStackParamList} from '@/navigation/types';
import {styles} from './styles';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Home({navigation}: HomeScreenProps) {
  const productList = getListProduct({
    limit: 10,
    key: ['getListProduct'],
    offset: 0,
  });
  const product = productList.data as ProductItemProps[];
  return (
    <View style={styles.container}>
      <HeaderNavigation title="Fake Commerce Recoil" rightSection={Cart} />
      <Product
        data={product}
        isLoading={productList.isFetching}
        navigation={navigation}
      />
    </View>
  );
}
