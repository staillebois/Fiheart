import FirebaseKeys from "../config"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen'
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

import * as firebase from "firebase";

firebase.initializeApp(FirebaseKeys);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Loading: LoadingScreen,
    App: MainTabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Loading"
  })
);
