import React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import MainNavigator from './MainNavigator';
import SplashScreen from '../screens/SplashScreen';

const  RootNavigator = createSwitchNavigator({
  splash: SplashScreen,
  main: {
    screen: ({ navigation }) => (
      <MainNavigator
        screenProps={{
          rootNavigation: navigation,
        }}
      />
    ),
  },
});

export default createAppContainer(RootNavigator);
