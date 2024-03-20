import ButtonView from '@/components/Button';
import TextView from '@/components/TextView';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ProductItemProps} from '@/types/Product';
import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {counterState} from '@/atoms/counterState';
import {useCart} from '@/hooks/useCart';

type FloatingAddToCartProps = {
  data: ProductItemProps;
};

export default function FloatingAddToCart({data}: FloatingAddToCartProps) {
  const {cart, addToCart} = useCart();
  const count = useRecoilValue(counterState);
  const setCount = useSetRecoilState(counterState);
  const productOnCart = cart.find(val => val.id === data.id);
  const navigation = useNavigation();

  const handleAddToCart = useCallback(() => {
    const payload = {
      ...data,
      count: count,
      total: data?.price * count,
      selected: true,
    };
    addToCart(payload);
    navigation.dispatch(DrawerActions.openDrawer());
    setCount(1);
  }, [addToCart, count, data, navigation, setCount]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setCount(1);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  console.log('render floating');
  return (
    <View style={styles.btnContainer}>
      <View style={styles.orderInfo}>
        <View>
          <TextView>Total Order</TextView>
          <TextView fz={20} fw="600" align="left">
            ${(data.price * count).toFixed(2)}
          </TextView>
        </View>
        {productOnCart && (
          <View>
            <TextView fw="bold">
              Currently {productOnCart?.count} item in Cart
            </TextView>
          </View>
        )}
      </View>
      <ButtonView
        onPress={() => handleAddToCart()}
        label="Add to Cart"
        size="md"
      />
    </View>
  );
}
