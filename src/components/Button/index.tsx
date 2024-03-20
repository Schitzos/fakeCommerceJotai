import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import theme from '@/theme';
import TextView from '../TextView';

interface ButtonViewProps {
  onPress: () => void;
  color?: string;
  size?: 'sm' | 'md';
  variant?: 'fill' | 'outline';
  label: string;
}

export default function ButtonView({
  onPress,
  color = theme.colors.neutral200,
  variant = 'fill',
  label,
  size = 'md',
}: ButtonViewProps) {
  return (
    <TouchableOpacity
      style={[
        variant === 'fill' ? styles.btnCart : styles.btnCartOutLine,
        size === 'md' ? styles.btnMD : styles.btnSM,
        {
          backgroundColor:
            variant === 'fill' && color !== undefined
              ? color
              : variant === 'fill'
              ? theme.colors.neutral200
              : theme.colors.white,
        },
      ]}
      onPress={onPress}>
      <TextView
        fz={size === 'sm' ? 12 : 16}
        fw="600"
        color={
          variant === 'fill' ? theme.colors.white : theme.colors.neutral200
        }>
        {label}
      </TextView>
    </TouchableOpacity>
  );
}
