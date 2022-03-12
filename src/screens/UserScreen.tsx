import { StyleSheet } from 'react-native'
import { RootTabScreenProps } from '../../types'
import { Text, View } from '../components/Themed'

export default function UserScreen({ navigation }: RootTabScreenProps<'User'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>유저정보 페이지</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
