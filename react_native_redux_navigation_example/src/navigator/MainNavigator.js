import { createStackNavigator } from 'react-navigation';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Main from '../screens/Main'
import TabOneSecond from '../screens/TabIndexOne/TabOneSecond';
import Tab from './TabNavigator';

const MainNavigator =  createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  main: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: Tab,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}'s Profile'`,
    }),
  },
  tabOneSecond: {
    screen: TabOneSecond,
  }

});

export default createAppContainer(MainNavigator);
