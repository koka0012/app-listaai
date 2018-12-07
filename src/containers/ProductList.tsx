import React from 'react'
import { FlatList } from 'react-navigation'
import { ListRenderItemInfo, View } from 'react-native'

import SearchBar from './Search'
import ProductItem from '../components/ProductItem'
import EmptyList from '../components/EmptyList'

export default class ProductList extends React.Component<any, any> {
  constructor(props: {}) {
    super(props)

    this._renderItem = this._renderItem.bind(this)
  }

  private _renderItem({ item }: ListRenderItemInfo<any>) {
    return <ProductItem item={item} />
  }

  private _keyExtrator(item: any, index: number) {
    return index.toString()
  }

  public render() {
    return (
      <FlatList
        style={{ flexGrow: 1 }}
        ListHeaderComponent={this.props.header}
        data={this.props.data || []}
        keyExtractor={this._keyExtrator}
        renderItem={this._renderItem}
        removeClippedSubviews
        ListEmptyComponent={<EmptyList />}
      />
    )
  }
}
