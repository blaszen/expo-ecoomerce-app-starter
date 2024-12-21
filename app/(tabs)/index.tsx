import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipes of the Month</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    marginTop:10,
    marginLeft:10,

  },
  header:{
    fontSize:24
  }
})