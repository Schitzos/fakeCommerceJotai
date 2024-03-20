import React, {Suspense, ComponentType} from 'react';
import {View} from 'react-native';

const fallback = <View />;
export const Suspensed =
  <P extends object>(Element: ComponentType<P>) =>
  (props: P) => {
    return (
      <Suspense fallback={fallback}>
        <Element {...props} />
      </Suspense>
    );
  };
