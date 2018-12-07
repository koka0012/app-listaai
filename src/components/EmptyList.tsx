import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-paper'

export default (props: any) => (
  <SafeAreaView
    style={{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }}
  >
    <Text style={{ color: '#3a3a3a', fontSize: 22 }}>
      Não encontramos nada!
    </Text>
  </SafeAreaView>
)
