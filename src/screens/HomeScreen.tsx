import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import { NavigationStackScreenOptions } from 'react-navigation'

import Search from '../containers/Search'
import HeaderLogo from '../components/HeaderLogo'

export default class HomeScreen extends React.Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: 'Bem vindo!',
    headerTitle: <HeaderLogo />,
  }

  public render() {
    return (
      <SafeAreaView style={{ flexGrow: 1 }}>
        <View
          style={{
            padding: 8,
          }}
        >
          <Search />
        </View>
      </SafeAreaView>
    )
  }
}
