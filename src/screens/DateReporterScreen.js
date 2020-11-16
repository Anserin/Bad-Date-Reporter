import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const DateReporterScreen = function ({ navigation }) {
  return <View>
    <Text>Instructions for the report?</Text>
    <Button title="Start" onPress={function(){navigation.navigate('Location')}} />
  </View>
};

export default DateReporterScreen;
