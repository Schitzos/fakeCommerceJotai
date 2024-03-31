import {atomWithStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProductItemProps} from '@/types/Product';

const storage = {
  getItem: async (key: string): Promise<ProductItemProps[]> => {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  },
  setItem: (key: string, value: ProductItemProps[]) => {
    const item = JSON.stringify(value);
    return AsyncStorage.setItem(key, item);
  },
  removeItem: (key: string) => {
    return AsyncStorage.removeItem(key);
  },
};

const content: ProductItemProps[] = [];

export const cartAtom = atomWithStorage<ProductItemProps[]>(
  'Cart',
  content,
  storage,
);
