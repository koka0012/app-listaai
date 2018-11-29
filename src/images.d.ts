import { ImageSourcePropType } from 'react-native'

declare module '*.png' {
  const value: string
  export default value
}
