import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabOneSecond from '../screens/TabIndexOne/TabOneSecond';
import Tab from './TabNavigator';

const MainNavigator = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  main: {
    screen: Tab,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}'s Profile'`,
    }),
  },
  tabOneSecond: {
    screen: TabOneSecond,
  },
});

export default createAppContainer(MainNavigator);
