import Counter from '@/components/Counter';
import TextView from '@/components/TextView';
import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {counterState} from '@/atoms/counterState';

type ProductDetailProps = {
  data: any;
};

export function ProductDetail({data}: ProductDetailProps) {
  const count = useRecoilValue(counterState);
  const setCount = useSetRecoilState(counterState);

  console.log('render product detail');
  return (
    <>
      <View style={styles.topInfo}>
        <TextView fz={24}>{data?.title}</TextView>
        <TextView fz={16} align="right">
          {data?.category}
        </TextView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <FastImage
            style={styles.image}
            source={{
              uri: data?.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.productInfo}>
            <View style={styles.productCount}>
              <TextView fz={20} fw="600" align="left">
                ${data?.price.toFixed(2)}
              </TextView>
              <Counter count={count} setCount={e => setCount(e)} />
            </View>
            <TextView fz={14} align="justify">
              {data?.description}
            </TextView>
          </View>
          <View style={styles.productReviewInfo}>
            <TextView fz={14} align="justify">
              {data?.rating.rate} from {data?.rating.count} Review
            </TextView>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default memo(ProductDetail);
