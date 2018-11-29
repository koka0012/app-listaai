import React from 'react'
import { Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

const styles = StyleSheet.create({
  logo: {
    width: 75,
  },
})

export default () => (
  <Image source={logo} style={[styles.logo]} resizeMode="contain" />
)
