import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

interface SkeletonProps {
  height?: number;
  width?: number | string;
  variant?: 'avatar' | 'text' | 'button';
}

const Skeleton: React.FC<SkeletonProps> = ({height, width}) => {
  return (
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      shimmerStyle={shimmerStyle(width || '100%', height || 24)}
    />
  );
};

export default Skeleton;

const shimmerStyle = (
  width: number | string,
  height: number,
  borderRadius?: number,
) => {
  return {
    borderRadius: borderRadius || 8,
    height: height,
    width: width,
  };
};
