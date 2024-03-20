import theme from '@/theme';
import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface TextViewProps {
  children: React.ReactNode;
  color?: string;
  fz?: number;
  fw?: '400' | '600' | '700' | 'bold' | 'normal';
  align?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  capitalize?: boolean;
  font?: string;
  customStyle?: any;
  singleLine?: boolean;
}

export default function TextView({
  children,
  color = theme.colors.black,
  fz = 12,
  fw = 'normal',
  align = 'left',
  capitalize = true,
  customStyle,
  singleLine = false,
}: TextViewProps) {
  const styles = StyleSheet.create({
    base: {
      color: color,
      fontSize: fz,
      fontWeight: fw,
      textAlign: align,
      textTransform: capitalize ? 'capitalize' : 'none',
    },
  });

  return (
    <Text style={[styles.base, customStyle]} numberOfLines={singleLine ? 1 : 0}>
      {children}
    </Text>
  );
}
