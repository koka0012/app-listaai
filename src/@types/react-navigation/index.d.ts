import * as reactnavigaiton from 'react-navigation'

declare module 'react-navigation' {
  export function createAppContainer(
    container: NavigationContainer
  ): NavigationContainer
}
