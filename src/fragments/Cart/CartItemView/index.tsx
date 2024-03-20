import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FastImage from 'react-native-fast-image';
import {ProductItemProps} from '@/types/Product';
import TextView from '@/components/TextView';
import Counter from '@/components/Counter';

interface CartItemFragmentsProps {
  data: ProductItemProps;
  handleCounter: (e: number, id: number) => void;
  handleSelectedCart: (id: number, val: boolean) => void;
}

export default function CartItemView({
  data,
  handleCounter,
  handleSelectedCart,
}: CartItemFragmentsProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(data.selected);
  const handleSelectCart = (val: boolean) => {
    setToggleCheckBox(val);
    handleSelectedCart(data.id, val);
  };
  return (
    <View key={data.id} style={styles.cartItem}>
      <View style={styles.cartItemTitle}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => handleSelectCart(newValue)}
          style={styles.cusCheckbox}
        />
        <TextView singleLine={true}>{data.title}</TextView>
      </View>
      <View style={styles.productInfoCount}>
        <FastImage
          style={styles.image}
          source={{
            uri: data.image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Counter
          count={data.count || 0}
          setCount={e => handleCounter(e, data.id)}
        />
      </View>
      <TextView align="right" fw="600">
        ${data?.total?.toFixed(2)}
      </TextView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartContainer: {
    gap: 8,
  },
  cartItem: {
    gap: 4,
  },
  cartItemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 32,
    gap: 8,
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
  },
  cusCheckbox: {
    width: 24,
    height: 24,
  },
});
