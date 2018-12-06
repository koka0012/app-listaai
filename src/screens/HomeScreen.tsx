import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import { NavigationStackScreenOptions } from 'react-navigation'

import HeaderLogo from '../components/HeaderLogo'
import ProductList from '../containers/ProductList'
import API from '../lib/api'

export default class HomeScreen extends React.Component<{}, any> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: 'Bem vindo!',
    headerTitle: <HeaderLogo />,
  }

  public state = {
    data: [],
  }

  public async componentDidMount() {
    const request = await API.get<any>('produtos')
    const data = request.data

    this.setState({ data })
  }

  public render() {
    return (
      <SafeAreaView style={{ flexGrow: 1 }}>
        <View>
          <ProductList data={this.state.data} />
        </View>
      </SafeAreaView>
    )
  }
}
