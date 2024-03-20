import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
});

interface TansatckContextProviderProps {
  children: React.ReactNode;
}

export default function TansatckContextProvider({
  children,
}: TansatckContextProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
