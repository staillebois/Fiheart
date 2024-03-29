import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Feather} from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import {YellowBox} from 'react-native';

export default function App(props) {

  /*Find a way to fix this warnings on deck swiper */
  YellowBox.ignoreWarnings(['Animated']);

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/splash.png'),
      require('./assets/images/icon.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...MaterialIcons.font,
      ...MaterialCommunityIcons.font,
      ...FontAwesome.font,
      ...Feather.font,
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
