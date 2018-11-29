import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { NavigationStackScreenOptions } from 'react-navigation'

export default class HomeScreen extends React.Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: 'Bem vindo!',
  }

  public render() {
    return (
      <SafeAreaView style={{ flexGrow: 1 }}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Testa</Text>
        </View>
      </SafeAreaView>
    )
  }
}
