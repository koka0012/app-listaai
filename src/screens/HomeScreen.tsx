import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import { NavigationStackScreenOptions } from 'react-navigation'

import HeaderLogo from '../components/HeaderLogo'
import ProductList from '../containers/ProductList'
import API from '../lib/api'
import { Searchbar } from 'react-native-paper'

export default class HomeScreen extends React.Component<any, any> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: 'Bem vindo!',
    headerTitle: <HeaderLogo />,
  }

  constructor(props: any) {
    super(props)

    this._changePesquisa = this._changePesquisa.bind(this)
    this._search = this._search.bind(this)
  }

  public state = {
    data: [],
    pesquisa: '',
  }

  private _changePesquisa(text: string) {
    this.setState({
      pesquisa: text,
    })
  }

  private _search() {
    if (!this.state.pesquisa) {
      return
    }
    this.props.navigation.navigate('Pesquisa', {
      pesquisa: this.state.pesquisa,
    })
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
          <ProductList
            data={this.state.data}
            header={
              <View style={{ margin: 8 }}>
                <Searchbar
                  value={this.state.pesquisa}
                  onChangeText={this._changePesquisa}
                  onIconPress={this._search}
                  onSubmitEditing={this._search}
                />
              </View>
            }
          />
        </View>
      </SafeAreaView>
    )
  }
}
