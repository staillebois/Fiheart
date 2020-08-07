import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
import MapScreen from '../screens/MapScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
},
{
    headerMode: 'none',
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={MaterialCommunityIcons}
      focused={focused}
      name="fire"
    />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
},
{
    headerMode: 'none',
})

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
},
{
    headerMode: 'none',
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Feather} focused={focused} name="user" />
  ),
}

const MapStack = createStackNavigator({
  Map: MapScreen,
},
{
    headerMode: 'none',
})

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={FontAwesome} focused={focused} name="map-marker" />
  ),
}

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  // TopPicksStack,
  MapStack,
  // MessagesStack,
  ProfileStack,
});

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={{HomeScreen}} options={{
      title:'Overview'
    }} />
  </HomeStack.Navigator>
)

const drawerNavigator = createDrawerNavigator({
  HomeStack,
  MapStack,
  ProfileStack
})

export default drawerNavigator;
