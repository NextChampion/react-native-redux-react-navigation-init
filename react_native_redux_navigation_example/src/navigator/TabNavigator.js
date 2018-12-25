import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import TabIndexOne from '../screens/TabIndexOne'
import TabIndexTwo from '../screens/TabIndexTwo'
import TabIndexThree from '../screens/TabIndexThree'


const TabBarComponent = (props) => (<BottomTabBar {...props} />);
export default createBottomTabNavigator(
  {
    one: TabIndexOne,
    two: TabIndexTwo,
    three: TabIndexThree,
  },
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />,
  },
);
