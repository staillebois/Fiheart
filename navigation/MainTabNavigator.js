import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'

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

const TopPicksStack = createStackNavigator({
  TopPicks: TopPicksScreen,
},
{
    headerMode: 'none',
})

TopPicksStack.navigationOptions = {
  tabBarLabel: 'TopPicks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={FontAwesome} focused={focused} name="diamond" />
  ),
}

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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  MessagesStack,
  TopPicksStack,
});

export default tabNavigator;
