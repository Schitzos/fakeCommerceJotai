import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import IconBack from '@assets/icon/icon-chevron-left.svg';
import {useNavigation} from '@react-navigation/native';
import TextView from '@components/TextView';

export function HeaderNavigation({
  backShown = false,
  title,
  rightSection = () => null,
}: {
  backShown?: boolean;
  title?: string;
  rightSection?: () => React.ReactNode;
}) {
  const navigation = useNavigation();
  console.log('render header');
  return (
    <View style={styles.baseLayout}>
      <SafeAreaView />
      <View style={styles.headerlayout}>
        <View style={styles.title}>
          {backShown && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconBack width={24} height={24} color={'black'} />
            </TouchableOpacity>
          )}
          <TextView fz={14} fw="bold">
            {title}
          </TextView>
        </View>
        {rightSection()}
      </View>
    </View>
  );
}

export default memo(HeaderNavigation);

const styles = StyleSheet.create({
  baseLayout: {
    backgroundColor: 'white',
  },
  headerlayout: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  floatingCart: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 400,
    width: '100%',
    backgroundColor: 'red',
  },
});
