import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyCalculator from "../calculator";
import CloneFacebook from '../CloneFacebook';
import Home from '../Home';
import { Icon } from 'react-native-vector-icons/Icon';

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {
          marginVertical: 15
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: (({ focused }) => <Icon name="home" />)
        }}
      />
      <Drawer.Screen
        name="Calculator"
        component={MyCalculator}
      />
      <Drawer.Screen
        name="CloneFacebook"
        component={CloneFacebook}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
