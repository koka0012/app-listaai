import * as React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default (name: string) => ({ tintColor }: { tintColor: string }) => (
  <Icon
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={22}
  />
)
