import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// Screen
import { DetailTransactionScreen, ListTransactionScreen, SplashScreen } from '../screen';

// interface
import { Transactions } from '../interface/transaction.interface';

export type RootStackParams = {
  SplashScreen: undefined;
  ListTransactionScreen: undefined;
  DetailTransactionScreen: {item: Transactions};
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={screenOption}
    initialRouteName={'SplashScreen'}
  >
    <RootStack.Screen name="ListTransactionScreen" component={ListTransactionScreen} />
    <RootStack.Screen name="DetailTransactionScreen" component={DetailTransactionScreen} />
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
  </RootStack.Navigator>
);

