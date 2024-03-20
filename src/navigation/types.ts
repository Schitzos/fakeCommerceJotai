import {ProductItemProps} from '../types/Product';

export type RootStackParamList = {
  Home: undefined;
  Detail: {data: ProductItemProps};
  Checkout: undefined;
  Product: undefined;
  BottomNav: undefined;
};
