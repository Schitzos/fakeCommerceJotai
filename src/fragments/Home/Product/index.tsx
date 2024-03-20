import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Platform, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductItemProps} from '@/types/Product';
import {RootStackParamList} from '@/navigation/types';
import TextView from '@/components/TextView';
import ProductItem from '../ProductItem';

interface ProductFragmentsProps {
  data: ProductItemProps[];
  isLoading: boolean;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Product: React.FC<ProductFragmentsProps> = ({
  data,
  isLoading,
  navigation,
}) => {
  if (isLoading) {
    return <TextView>Loading</TextView>;
  }

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <ProductItem data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.title}
        numColumns={2}
        contentContainerStyle={styles.flatListStyle}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  flatListStyle: {
    paddingBottom: Platform.OS === 'ios' ? 128 : 72,
  },
});
