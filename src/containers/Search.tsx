import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { Searchbar } from 'react-native-paper'

interface IState {
  text: string
}

export default class SeachContainer extends React.Component<{}, IState> {
  private searchbar: ReactNode = null

  constructor(props: {}) {
    super(props)

    this._searchPressed = this._searchPressed.bind(this)
    this._refComponent = this._refComponent.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  private _searchPressed() {
    if (!this.state.text) {
      return (this.searchbar as any).focus()
    }
    alert(this.state.text)
  }

  private _refComponent(component: React.ReactNode) {
    this.searchbar = component
  }

  private _onChangeText(text: string) {
    this.setState({ text })
  }

  public state: IState = {
    text: '',
  }

  public render() {
    return (
      <Searchbar
        ref={this._refComponent}
        placeholder="Pesquise por Produto"
        onIconPress={this._searchPressed}
        onChangeText={this._onChangeText}
        value={this.state.text}
        onSubmitEditing={this._searchPressed}
        style={{
          margin: 8,
        }}
      />
    )
  }
}
