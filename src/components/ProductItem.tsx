import React from 'react'
import { randomHexColor, invertColor } from '../lib/color'
import { View } from 'react-native'
import { Card, Title, Text } from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Price from './Price'

const format = Intl.NumberFormat('latn', {
  style: 'currency',
  currency: 'BRL',
})

export default class ProductItem extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }
  private backgroundColor = randomHexColor()
  private colorInverse = invertColor(this.backgroundColor, true)

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
        <Card elevation={3}>
          <Card.Cover
            source={{
              uri: `https://dummyimage.com/820x461/${this.backgroundColor}/${
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
