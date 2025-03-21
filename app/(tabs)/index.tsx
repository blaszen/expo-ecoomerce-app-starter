import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

type Props = {}

const HomeScreen = (props: Props) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  return (
    <View style={styles.container}>
        {/* Heading */}
      <View style={styles.heading}>
        <Text style={styles.header}>Menyu</Text>
        <Ionicons name="notifications-outline" size={20} color={'black'}/>
    </View>
      {/* SearchBar */}
    <View style={styles.searchContainer}>
    <Ionicons name="search-outline" size={20} color={'black'}/>
        <TextInput
          style={styles.input}
          placeholder="What do you want to eat?"
          value={searchQuery}
          onChangeText={handleSearch}
          autoCorrect={false}
          clearButtonMode="always"
        />
            <Ionicons name="close-outline" size={20} color={'black'}/>
      </View>
      {/*Categories */}
      <View style={styles.categories}>
        <Text>Rice</Text>
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   flex:1,
  marginLeft:10,
  marginTop:10,
  marginRight:10


    
  },
  heading:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },

  header:{
    fontSize:24,
    fontWeight:'bold',
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10

  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  categories:{
    marginTop:10,
    height: 40,
    width:90,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center'
  }

})