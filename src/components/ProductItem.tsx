import React from 'react'
import { randomHexColor, invertColor } from '../lib/color'
import { View } from 'react-native'
import { Card, Title, Text } from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Price from './Price'
import { withNavigation } from 'react-navigation'

const format = Intl.NumberFormat('latn', {
  style: 'currency',
  currency: 'BRL',
})

class ProductItem extends React.Component<any> {
  constructor(props: any) {
    super(props)

    this._navigateToItem = this._navigateToItem.bind(this)
  }
  private backgroundColor = randomHexColor()
  private colorInverse = invertColor(this.backgroundColor, true)

  private _navigateToItem() {
    this.props.navigation.navigate('Produto', {
      item: this.props.item,
    })
  }

  public render() {
    const { item } = this.props

    return (
      <View
        style={{
          margin: 4,
          flex: 1,
          flexBasis: 0,
          marginHorizontal: 8,
        }}
      >
        <Card elevation={3} onPress={this._navigateToItem}>
          <Card.Cover
            source={{
              uri: `https://dummyimage.com/1920x1080/${this.backgroundColor}/${
                this.colorInverse
              }?text=${item.nome}`,
              cache: (FastImage as any).cacheControl.web,
            }}
            customComponent={FastImage}
          />
          <Card.Content>
            <Title style={{ textAlign: 'center' }}>{item.nome}</Title>
            <Text
              style={{
                color: '#a3a3a3',
                textAlign: 'center',
              }}
            >
              Marca: {item.marca}
            </Text>
            <Price>{format.format(item.valor)}</Price>
          </Card.Content>
        </Card>
      </View>
    )
  }
}

export default withNavigation(ProductItem)
