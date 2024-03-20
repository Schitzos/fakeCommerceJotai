import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconCart from '@assets/icon/icon-shopping-cart.svg';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import theme from '@/theme';
import TextView from '../TextView';
import {styles} from './styles';
import {useCart} from '@/hooks/useCart';

export default function Cart() {
  const navigation = useNavigation();
  const {cart} = useCart();
  console.log('render cart');

  return (
    <TouchableOpacity
      style={styles.baseLayout}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <IconCart width={24} height={24} />
      <View style={styles.baloon}>
        <TextView fz={10} color={theme.colors.white}>
          {cart.length}
        </TextView>
      </View>
    </TouchableOpacity>
  );
}
