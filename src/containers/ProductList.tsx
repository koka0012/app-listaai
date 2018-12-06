import React from 'react'
import { FlatList } from 'react-navigation'
import { ListRenderItemInfo, View } from 'react-native'

import SearchBar from './Search'
import ProductItem from '../components/ProductItem'

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
        ListHeaderComponent={<SearchBar />}
        data={this.props.data || []}
        keyExtractor={this._keyExtrator}
        renderItem={this._renderItem}
        removeClippedSubviews
      />
    )
  }
}
