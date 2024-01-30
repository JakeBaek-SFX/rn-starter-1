import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const itemList = [
    {name: 'Friend #1', key: '1'},
    {name: 'Friend #2', key: '2'},
    {name: 'Friend #3', key: '3'},
    {name: 'Friend #4', key: '4'},
    {name: 'Friend #5', key: '5'},
  ]
  return (
    <FlatList 
      keyExtractor={(item) => item.key}
      data={itemList} 
      renderItem={({item}) => {
        return <Text>{item.name}</Text>
      }} 
    />
  )
}

const styles = StyleSheet.create({});

export default ListScreen;