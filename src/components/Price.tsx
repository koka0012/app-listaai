import React from 'react'
import { TextProps, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

interface IProps extends TextProps {
  children: string
}

export default ({ children, ...rest }: IProps) => (
  <Text {...rest} style={[rest.style, styles.text]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#157811',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
