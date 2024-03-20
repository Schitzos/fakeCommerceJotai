import dayjs from 'dayjs';

export interface ProductItemProps {
  id: number;
  count?: number;
  total?: number;
  title: string;
  image: string;
  price: number;
  selected?: boolean;
  rating: {
    rate: number;
    count: number;
  };
  updatedAt: dayjs.Dayjs;
}
