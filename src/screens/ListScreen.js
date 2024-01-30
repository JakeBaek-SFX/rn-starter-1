import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const itemList = [
    {name: 'Friend #1', key: '1', age: 20},
    {name: 'Friend #2', key: '2', age: 45},
    {name: 'Friend #3', key: '3', age: 32},
    {name: 'Friend #4', key: '4', age: 27},
    {name: 'Friend #5', key: '5', age: 53},
    {name: 'Friend #7', key: '6', age: 30},
  ]
  return (
    <FlatList 
      keyExtractor={(item) => item.key}
      data={itemList} 
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }} 
    />
  )
}

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 10
  }
});

export default ListScreen;