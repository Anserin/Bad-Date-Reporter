import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput, Alert } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const ReportLocationScreen = function ({ navigation }) {
  const [car, setCar] = useState(false);
  const [offendhotel, setOffendHotel] = useState(false);
  const [escort, setEscort] = useState(false);
  const [online, setOnline] = useState(false);
  const [offender, setOffender] = useState(false);
  const [street, setStreet] = useState(false);
  const [house, setHouse] = useState(false);
  const [phone, setPhone] = useState(false);
  const [myhotel, setMyHotel] = useState(false);
  const [park, setPark] = useState(false);
  const [bar, setBar] = useState(false);
  const [other, setOther] = useState(false);
  const [locationinfo, setLocationInfo] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}> Location Information </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.question}>
          <Text style={styles.question_label}>Where did it happen?<Text style={{ color: "red" }}>*</Text></Text>
          <View style={styles.checkboxes}>
            <View style={styles.subcheckboxes}>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={car}
                  onValueChange={setCar}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Car</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={offendhotel}
                  onValueChange={setOffendHotel}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Offender's Hotel</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={escort}
                  onValueChange={setEscort}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Escort Agency</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={online}
                  onValueChange={setOnline}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Online/Computer</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={offender}
                  onValueChange={setOffender}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Offender's House</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={street}
                  onValueChange={setStreet}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Street</Text>
              </View>
            </View>
            <View style={styles.subcheckboxes}>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={house}
                  onValueChange={setHouse}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Your House</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={phone}
                  onValueChange={setPhone}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Phone/Text</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={myhotel}
                  onValueChange={setMyHotel}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Your Hotel</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={park}
                  onValueChange={setPark}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Park</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={bar}
                  onValueChange={setBar}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Bar/Restaurant</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={other}
                  onValueChange={setOther}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Other</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.question_label}>Other Location Information: </Text>
          <TextInput
            style={styles.location_input}
            onChangeText={text => setLocationInfo(text)}
            value={locationinfo}
            placeholder={"(address, street, neighborhood, etc.)"}
          />
        </View>
      </View>

      <View style={styles.footer_view}>
        <View style={styles.prev_button}>
          <Button
            title="Back"
            onPress={function () { navigation.navigate('Time') }}
          />
        </View>
        <View style={styles.next_button}>
          <Button
            title="Next"
            disabled={!(car || offender || offendhotel || escort || online || street || house || phone || myhotel || park || bar || other)}
            onPress={() => navigation.navigate('Type')}
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
    justifyContent: "space-between"
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
  checkbox_container: {
    flexDirection: "row",
  },
  label: {
    margin: 8,
  },
  checkboxes: {
    flexDirection: "row",
  },
  subcheckboxes: {
    justifyContent: "space-around",
  },
  question: {
    flex: 1,
    marginBottom: 20,
  },
  location_input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  question_label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ReportLocationScreen;
