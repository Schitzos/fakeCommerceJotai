import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TextView from '../TextView';
import {styles} from './styles';

type CounterProps = {
  count: number;
  setCount: (val: number) => void;
};

export function Counter({count, setCount}: CounterProps) {
  return (
    <View style={styles.counter}>
      <TouchableOpacity
        onPress={() => {
          count !== 1 && setCount(count - 1);
        }}
        style={styles.btnCounter}>
        <TextView>-</TextView>
      </TouchableOpacity>
      <View>
        <TextView>{count}</TextView>
      </View>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.btnCounter}>
        <TextView>+</TextView>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Counter);
