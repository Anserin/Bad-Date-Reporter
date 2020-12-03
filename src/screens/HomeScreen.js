import React, {useState} from "react";
import {View, Button, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList} from "react-native";

const HomeScreen = function({navigation}) {
  const [food, setFood] = useState([
    {name: 'Blue Door Soup Kitchen', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '1'},
    {name: 'Sudbury Food Pantry', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '2'},
    {name: 'Myths & Mirrors', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '3'},
    {name: 'Elgin Street Mission', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '4'},
    {name: 'Melborough Emergency Food Pantries', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '5'},
  ]);
  const [shelter, setShelter] = useState([
    {name: 'Womens Shelter', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '1'},
    {name: 'Foyer Notre Dame House', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '2'},
    {name: 'Elizabeth Fry Society', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '3'},
    {name: 'Samaritan Centre', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '4'},
    {name: 'Genervra House', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '5'},
    {name: 'Sudbury Action Centre for Youth', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '6'},
  ]);
  const [clothing, setClothing] = useState([
    {name: 'Better Beginnings Better Futures', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '1'},
    {name: 'Northern Reflections', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '2'},
    {name: 'Salvation Army', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '3'},
    {name: 'Risseau Access', imageURL:'https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg', key: '4'},
  ]);

  return (
  <View>
    <View style={styles.header}>
    <View style={styles.listContainer} >
      <TouchableOpacity style={styles.topButton} 
      onPress={() => {navigation.navigate('SignUp')}}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} 
      onPress={() => {navigation.navigate('Report')}}>
        <Text>Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      onPress={() => {navigation.navigate('Viewer')}}>
        <Text>View</Text>
      </TouchableOpacity>
    </View>
    <View>
      <FlatList 
        data={food} 
        renderItem = {({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        horizontal={true}
      />
      <FlatList 
        data={shelter}
        renderItem = {({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        horizontal={true}
      />
      <FlatList 
        data={clothing}
        renderItem = {({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        horizontal={true}
      />
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 500,
    height: 125,
    backgroundColor:'maroon'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    bottom: 30,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 90,
    backgroundColor: "lightblue",
    color: "#20232a",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    height: 100,
    width: 200,
    alignItems: "center",
  },
  item:{
    padding: 31,
    backgroundColor: 'beige',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 5,
    bottom: 10,
  },
  topButton:{ 
   borderWidth: 6,
   borderColor: 'gold',
   width: 65
  }
});

export default HomeScreen;
