import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  HeaderProps,
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import tabBarIcon from './components/tabBarIcon'
import AppBar from './components/AppBar'

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: (navigationProps: HeaderProps) => <AppBar {...navigationProps} />,
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
