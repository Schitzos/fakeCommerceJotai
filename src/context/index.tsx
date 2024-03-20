import React from 'react';
import PropTypes from 'prop-types';
import TansatckContextProvider from './TanstackContext';
import RecoilProvider from './RecoilContext';

export default function ContextProvider({
  children,
}: {
  children: any;
}): React.ReactNode {
  return (
    <TansatckContextProvider>
      <RecoilProvider>{children}</RecoilProvider>
    </TansatckContextProvider>
  );
}

ContextProvider.defaultProps = {
  children: null,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};
