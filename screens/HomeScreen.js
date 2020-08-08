import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import Swiper from 'react-native-deck-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Swiper
        useViewOverflow={Platform.OS === 'ios'}
        cards={HomeScreenPics}
        renderCard={Card}
        infinite // keep looping cards infinitely
        backgroundColor="white"
        // cardHorizontalMargin={0}
        stackSize={1} // number of cards shown in background
        animateOverlayLabelsOpacity
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
      /> */}
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
