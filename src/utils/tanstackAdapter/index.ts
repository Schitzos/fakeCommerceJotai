import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import AxiosAdapter from '../axiosAdapter';
import queryString from 'query-string';

export function Query(options: any) {
  return useQuery({
    queryKey: options.key,
    queryFn: () => AxiosAdapter(options),
    enabled: options.enabled,
    meta: {
      errorMessage: 'Failed to fetch data',
    },
    staleTime: 600000,
  });
}

export function InfiniteQuery(options: any) {
  return useInfiniteQuery({
    queryKey: options.key,
    queryFn: ({pageParam = options.params.offset}) => {
      options.params.offset = pageParam;
      return AxiosAdapter(options);
    },
    ...options,
    staleTime: 600000,
    getNextPageParam: (lastPage: any) => {
      const urlString = lastPage.next;
      const parsedParams = queryString.parseUrl(urlString).query;
      const offset = parsedParams.offset;
      return offset;
    },
  });
}

const Tanstack = {
  Query,
  InfiniteQuery,
};

export default Tanstack;
