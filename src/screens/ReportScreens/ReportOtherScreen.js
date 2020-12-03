import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const ReportOtherScreen = function ({ navigation }) {
  const [value, changeText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}> Other Information </Text>
      </View>

      <View style={styles.form}>
        <TextInput 
          multiline={true}
          onChangeText={text => changeText(text)}
          style={styles.incident_input}
          placeholder={"Add any other details about the offender or the incident here."}
          numberOfLines={12}
        />
      </View>


      <View style={styles.footer_view}>
        <View style={styles.prev_button}>
          <Button
            title="Back"
            onPress={() => { navigation.navigate('Offender') }}
          />
        </View>

        <Text>Page 5/5</Text>

        <View style={styles.next_button}>
          <Button
            title="Submit!"
            color="green"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  header_view: {
    flex: 1,
    alignContent: "center",
  },
  header_text: {
    fontSize: 20,
    textAlign: "center",
  },
  form: {
    flex: 8,
  },
  footer_view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prev_button: {
    height: 50,
    width: 100,
  },
  next_button: {
    height: 50,
    width: 100,
  },
  question_label: {
    marginLeft: 10,
    fontSize: 18,
  },
  incident_input: {
    height: 200,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "center",
    textAlignVertical: "top",
  },
});

export default ReportOtherScreen;
