import React from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity} from "react-native";

const HomeScreen = function({navigation}) {
  return (
  <View>
    <View style={styles.header}>
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
      <Button 
        title="TEST" 
        onPress={() => {navigation.navigate('SignUp')}}
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
    bottom: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default HomeScreen;
