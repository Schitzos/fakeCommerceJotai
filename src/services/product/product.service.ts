import Tanstack from '@/utils/tanstackAdapter';

interface GetListProductParams {
  limit: number;
  key: string[];
  offset: number;
}

export const getListProduct = ({limit, offset, key}: GetListProductParams) => {
  const options = {
    url: `${process.env.BASE_URL}/products`,
    method: 'GET',
    key: key,
    params: {limit: limit, offset: offset},
  };
  return Tanstack.Query(options);
};

interface GetProductParams {
  id: number;
  key: string[];
}

export const getProduct = ({id, key}: GetProductParams) => {
  const options = {
    url: `${process.env.BASE_URL}/products/${id}`,
    method: 'GET',
    key: key,
    enabled: !!id,
  };
  return Tanstack.Query(options);
};
