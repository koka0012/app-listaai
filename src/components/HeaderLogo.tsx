import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import logo from '../assets/logo.png'

const styles = StyleSheet.create({
  logo: { width: 1000, position: 'absolute' },
})

export default () => (
  <Image source={logo} style={[styles.logo]} resizeMode="center" />
)
