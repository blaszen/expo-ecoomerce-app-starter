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
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
          autoCorrect={false}
          clearButtonMode="always"
        />
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
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

})