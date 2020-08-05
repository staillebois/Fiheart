import React from 'react'
import { Platform, StyleSheet, View, Image, Text } from 'react-native'

export const Card = ({ pic, title, caption }) => (
  <View>
      <Image source={pic}>
      </Image>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 30,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
})
