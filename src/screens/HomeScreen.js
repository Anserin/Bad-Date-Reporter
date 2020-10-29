import React from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity} from "react-native";

const HomeScreen = function({navigation}) {

  return <View>
    <Text style={styles.text}>Sudbury Bad Date Reporter</Text>
    <TouchableOpacity onPress={function(){navigation.navigate('Report')}}>
      <Text>Report a "Bad Date"</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={function(){navigation.navigate('Viewer')}}>
      <Text>View "Bad Date" Reports</Text>
    </TouchableOpacity>
    
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
