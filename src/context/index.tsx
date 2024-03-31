import React from 'react';
import PropTypes from 'prop-types';
import TansatckContextProvider from './TanstackContext';

export default function ContextProvider({
  children,
}: {
  children: any;
}): React.ReactNode {
  return <TansatckContextProvider>{children}</TansatckContextProvider>;
}

ContextProvider.defaultProps = {
  children: null,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};
