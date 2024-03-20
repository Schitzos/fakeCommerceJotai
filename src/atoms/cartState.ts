import {AtomEffect, atom} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProductItemProps} from '@/types/Product';

interface AsyncStorageEffect {
  (key: string): AtomEffect<ProductItemProps[]>;
}

const asyncStorageEffect: AsyncStorageEffect =
  key =>
  ({setSelf, onSet, trigger}) => {
    const loadPersisted = async () => {
      const savedValue = await AsyncStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    if (trigger === 'get') {
      loadPersisted();
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const cartState = atom<ProductItemProps[]>({
  key: 'Cart',
  default: [],
  effects: [asyncStorageEffect('cart-data')],
});
