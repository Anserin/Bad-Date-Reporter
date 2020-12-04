import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from "react-native-gesture-handler";

const DateReporterScreen = function ({ navigation }) {
  const [myself_selected, setMyself] = useState(false);
  const [other_selected, setOther] = useState(false);

  return (
  <View>
    <View style={styles.information_container}>
      <Text style={styles.text_info}>
        Please fill in the information as best as you can.
        Anything with "<Text style={{color: "red"}}>(*Required*)</Text>" is obligated, everything else is optional.{"\n\n"}
        To start, check off what applies below and press start to continue.{"\n"}
      </Text>
    </View>

    <View style={styles.form}>
      <Text style={styles.question_label}>Who did this bad date/aggressor incident happen to?<Text style={{color: "red"}}>(*Required*)</Text></Text>
      <View style={styles.checkbox_container}>
        <CheckBox
          value={myself_selected}
          onValueChange={setMyself}
          style={StyleSheet.checkbox}  
        />
        <Text style={styles.label}>Me</Text>
      </View>
      <View style={styles.checkbox_container}>
        <CheckBox
          value={other_selected}
          onValueChange={setOther}
          style={StyleSheet.checkbox}  
        />
        <Text style={styles.label}>Someone Else</Text>
      </View>
    </View>

    <View style={styles.next_page_button}>
    <Button 
      title="Start" 
      color="maroon"
      onPress={() => navigation.navigate("Time")}
      disabled={!(myself_selected || other_selected)}
      style={styles.next_page_button}
    />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  text_info: {
    fontSize: 25,
    paddingTop: 20,
    textAlign: "center",
    borderWidth: 10,
    backgroundColor: 'lightblue',
  },
  question_label: {
    marginLeft: 10,
    fontSize: 26,
  },
  information_container: {
    alignItems: "center",
  },
  checkbox_container: {
    flexDirection: "row",
    paddingTop: 30,
    marginLeft: 120,
  },
  label: {
    margin: 2,
    fontSize: 20,
  },
  form: {
    flexDirection: "column"
  },
  next_page_button: {
    color: 'red',
    marginTop: 20,
    padding: 20,
  }
})

export default DateReporterScreen;
