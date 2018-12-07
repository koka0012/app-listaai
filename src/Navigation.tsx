import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  HeaderProps,
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import tabBarIcon from './components/tabBarIcon'
import ProdutoScreen from './screens/ProdutoScreen'
import PesquisaScreen from './screens/PesquisaScreen'

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Produto: {
      screen: ProdutoScreen,
    },
    Pesquisa: {
      screen: PesquisaScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar',
      headerStyle: {
        backgroundColor: '#1c9dc1',
      },
      headerBackTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      // header: (navigationProps: HeaderProps) => <AppBar {...navigationProps} />,
    },
  } as any
)

const TabNavigator = createMaterialBottomTabNavigator({
  HomeTab: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon('home'),
      tabBarLabel: 'Início',
    },
  },
})

export default createAppContainer(TabNavigator)
