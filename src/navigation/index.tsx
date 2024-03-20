/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconHome from '@assets/icon/icon-home.svg';
import IconChart from '@assets/icon/icon-chart.svg';
import DrawerCart from '@/fragments/Cart/DrawerCart';

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return <DrawerCart navigation={props.navigation} />;
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, drawerPosition: 'right'}}
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}>
      <Drawer.Screen name="BottomNav" component={TabNavigator} />
      <Drawer.Screen name="Detail" component={route.DetailScreen} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {marginVertical: 8},
      }}>
      <Tab.Screen
        name="Home"
        component={route.HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome width={16} height={16} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Performance Test"
        component={route.TestScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconChart width={16} height={16} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName={'Product'}>
        <Stack.Screen name="Product" component={DrawerNavigator} />
        <Stack.Screen name="Checkout" component={route.CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
