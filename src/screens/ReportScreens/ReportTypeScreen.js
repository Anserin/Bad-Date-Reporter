import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput} from "react-native";
import CheckBox from '@react-native-community/checkbox';

const ReportTypeScreen = function ({ navigation }) {
  const [s_assault, setSAssault] = useState(false);
  const [p_assault, setPAssault] = useState(false);
  const [threats, setThreats] = useState(false);
  const [condom, setCondom] = useState(false);
  const [ripoff, setRipOff] = useState(false);
  const [consent, setConsent] = useState(false);
  const [theft, setTheft] = useState(false);
  const [kidnap, setKidnap] = useState(false);
  const [sti, setSti] = useState(false);
  const [film, setFilm] = useState(false);
  const [stalk, setStalk] = useState(false);
  const [other, setOther] = useState(false);
  const [incidentinfo, setIncidentInfo] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}> Incident Information </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.question}>
          <Text style={styles.question_label}>Incident Type<Text style={{ color: "red" }}>(*Required*)</Text></Text>
          <View style={styles.checkboxes}>
            <View style={styles.subcheckboxes}>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={s_assault}
                  onValueChange={setSAssault}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Sexual Assault</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={p_assault}
                  onValueChange={setPAssault}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Physical Assault</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={threats}
                  onValueChange={setThreats}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Threats/Verbal Harassment</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={condom}
                  onValueChange={setCondom}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Removed/Refused Condom</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={ripoff}
                  onValueChange={setRipOff}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Rip Off (Didn't Pay)</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={consent}
                  onValueChange={setConsent}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Violated Consent</Text>
              </View>
            </View>


            <View style={styles.subcheckboxes}>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={theft}
                  onValueChange={setTheft}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Theft</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={kidnap}
                  onValueChange={setKidnap}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Kidnap/Confined</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={sti}
                  onValueChange={setSti}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>STI/STD Concern</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={film}
                  onValueChange={setFilm}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Tried to Film</Text>
              </View>
              <View style={styles.checkbox_container}>
                <CheckBox
                  value={stalk}
                  onValueChange={setStalk}
                  style={StyleSheet.checkbox}
                />
                <Text style={styles.label}>Stalking</Text>
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

        <View style={styles.question2}>
          <Text style={styles.question_label}>Other Incident Information</Text>
          <TextInput
            style={styles.incident_input2}
            onChangeText={text => setIncidentInfo(text)}
            value={incidentinfo}
            placeholder={"(other details about the incident)"}
          />
        </View>
      </View>


      <View style={styles.footer_view}>
        <View style={styles.prev_button}>
          <Button
            title="Back"
            color='maroon'
            onPress={() => { navigation.navigate('Location') }}
          />
        </View>

        <Text>Page 3/5</Text>

        <View style={styles.next_button}>
          <Button
            title="Next"
            color='maroon'
            onPress={() => navigation.navigate('Offender')}
            disabled={!(s_assault || p_assault || threats || condom || ripoff || consent || theft || kidnap || sti || film || stalk || other)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  header_view: {
    flex: 1,
    alignContent: "center",
    paddingBottom: 20,
    backgroundColor: 'maroon',
    paddingTop: 30,
  },
  header_text: {
    fontSize: 30,
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
    marginLeft: 10,
    paddingTop: 10,
    top: 20,
  },
  label: {
    marginTop: 5,
    fontSize: 15,
  },
  checkboxes: {
    flexDirection: "row",
  },
  subcheckboxes: {
    justifyContent: "space-around",
  },
  question: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
    marginBottom: 20,
    top: 30,
  },
  question2: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
    marginBottom: 20,
    top: 70,
  },
  incident_input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  incident_input2:{
    height: 40,
    width: 390,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
    top: 10,
  },
  question_label: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ReportTypeScreen;
