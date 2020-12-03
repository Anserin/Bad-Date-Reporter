import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const DateReporterScreen = function ({ navigation }) {
  const [myself_selected, setMyself] = useState(false);
  const [other_selected, setOther] = useState(false);

  return (
  <View>
    <View style={styles.information_container}>
      <Text style={styles.text_info}>
        Please fill in the information as best as you can.
        Anything with a star is obligated, everything else is optional.{"\n\n"}
        To start, check off what applies below and press start to continue.{"\n"}
      </Text>
    </View>

    <View style={styles.form}>
      <Text style={styles.question_label}>Who did this bad date/aggressor incident happen to?<Text style={{color: "red"}}>*</Text></Text>
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
      onPress={function(){
        if (myself_selected || other_selected) {
          navigation.navigate("Time")
        }
        else {
          Alert.alert(
            "Can't Continue",
            "Please fill out the required field",
            [
              { 
                text: "OK",
              }
            ],
            { cancelable: false }
          );
        }
      }} 
      style={styles.next_page_button}
    />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  text_info: {
    fontSize: 20,
    textAlign: "center",
  },
  question_label: {
    fontSize: 16,
  },
  information_container: {
    alignItems: "center",
  },
  checkbox_container: {
    flexDirection: "row",
  },
  label: {
    margin: 8,
  },
  form: {
    flexDirection: "column"
  },
  next_page_button: {
    paddingTop: 50,
    alignSelf: "center",
    width: 100,
  }
})

export default DateReporterScreen;
