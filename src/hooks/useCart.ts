import dayjs from 'dayjs';
import {ProductItemProps} from '@/types/Product';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {cartState} from '@/atoms/cartState';

interface UseCartResult {
  cart: ProductItemProps[];
  addToCart: (newItem: ProductItemProps) => void;
  updateCart: (val: number, id: number) => void;
  selectCart: (val: boolean, id: number) => void;
  setCart: (data: ProductItemProps[]) => void;
  clearCart: () => void;
}

export function useCart(): UseCartResult {
  const cart = useRecoilValue(cartState);
  const setCart = useSetRecoilState(cartState);
  const addToCart = (newItem: ProductItemProps) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      item => item.id === newItem.id,
    );
    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        count: updatedCart[existingProductIndex].count! + newItem.count!,
        total: updatedCart[existingProductIndex].total! + newItem.total!,
        updatedAt: dayjs(),
      };
    } else {
      newItem.updatedAt = dayjs();
      updatedCart.push(newItem);
    }

    const sortedCartByDate = updatedCart.sort(
      (a: ProductItemProps, b: ProductItemProps) =>
        dayjs(b.updatedAt).toDate().getTime() -
        dayjs(a.updatedAt).toDate().getTime(),
    );
    setCart(sortedCartByDate);
  };

  const updateCart = (val: number, id: number) => {
    const existingProductIndex = cart.findIndex(
      (item: ProductItemProps) => item.id === id,
    );
    const updatedCart = [...cart];

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        count: val,
        total: updatedCart[existingProductIndex].price * val,
      };
    }
    setCart(updatedCart);
  };

  const selectCart = (val: boolean, id: number) => {
    const existingProductIndex = cart.findIndex(
      (item: ProductItemProps) => item.id === id,
    );
    const updatedCart = [...cart];

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        selected: val,
      };
    }
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    setCart,
    addToCart,
    updateCart,
    selectCart,
    clearCart,
  };
}
