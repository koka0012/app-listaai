import React from 'react'
import { Text, List } from 'react-native-paper'
import { NavigationStackScreenOptions, FlatList } from 'react-navigation'
import { SafeAreaView, ScrollView } from 'react-native'

const format = Intl.NumberFormat('latn', {
  style: 'currency',
  currency: 'BRL',
})

export default class ProdutoScreen extends React.Component<any> {
  public static navigationOptions = ({
    navigation,
  }: any): NavigationStackScreenOptions => ({
    title: navigation.state.params.item.nome,
  })

  public render() {
    const { item } = this.props.navigation.state.params
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flexGrow: 1 }}>
          <List.Item title="Nome" description={item.nome} />
          <List.Item title="Marca" description={item.marca} />
          <List.Item title="Categoria" description={item.categoria} />
          <List.Item title="Valor" description={format.format(item.valor)} />
          <List.Item title="Descrição" description={item.descricao} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
