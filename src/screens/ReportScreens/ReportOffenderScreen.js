import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Picker, ScrollView } from "react-native";

const ReportOffenderScreen = function ({ navigation }) {
  const [age, setAge] = useState("Don't Know");
  const [race, setRace] = useState("Don't Know");
  const [haircolor, setHairColor] = useState("Don't Know");
  const [hairlength, setHairLength] = useState("Don't Know");
  const [hairstyle, setHairStyle] = useState("Don't Know");
  const [facehair, setFaceHair] = useState("Don't Know");
  const [build, setBuild] = useState("Don't Know");
  const [height, setHeight] = useState("Don't Know");
  const [gender, setGender] = useState("Don't Know");
  const [glasses, setGlasses] = useState("Don't Know");


  return (
    <View style={styles.container}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}> Offender Information </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.question}>

          <Text style={styles.question_label}>Offender Appearance:</Text>

          <ScrollView style={styles.all_pickers}>
            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Approximate Age:</Text>
              <Picker
                selectedValue={age}
                onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Over 65" value="65+" />
                <Picker.Item label="60's" value="60s" />
                <Picker.Item label="50's" value="50s" />
                <Picker.Item label="40's" value="40s" />
                <Picker.Item label="30's" value="30s" />
                <Picker.Item label="20's" value="20s" />
                <Picker.Item label="Under 20" value="20-" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Perceived Ethnicity:</Text>
              <Picker
                selectedValue={race}
                onValueChange={(itemValue, itemIndex) => setRace(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Indigenous" value="indig" />
                <Picker.Item label="Asian" value="asian" />
                <Picker.Item label="African American" value="african" />
                <Picker.Item label="East Indian" value="eastind" />
                <Picker.Item label="Hispanic" value="hispanic" />
                <Picker.Item label="Middle Eastern" value="mideast" />
                <Picker.Item label="Mixed Race" value="mixedrace" />
                <Picker.Item label="Caucasian" value="caucasian" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Hair Colour:</Text>
              <Picker
                selectedValue={haircolor}
                onValueChange={(itemValue, itemIndex) => setHairColor(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Brown" value="brown" />
                <Picker.Item label="Black" value="black" />
                <Picker.Item label="Blond" value="blond" />
                <Picker.Item label="Grey" value="grey" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Hair Length:</Text>
              <Picker
                selectedValue={hairlength}
                onValueChange={(itemValue, itemIndex) => setHairLength(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Long" value="long" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Short" value="short" />
                <Picker.Item label="Bald" value="bald" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Hair Style:</Text>
              <Picker
                selectedValue={hairstyle}
                onValueChange={(itemValue, itemIndex) => setHairStyle(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Neat" value="neat" />
                <Picker.Item label="Messy" value="messy" />
                <Picker.Item label="Curly" value="curly" />
                <Picker.Item label="Wavy" value="wavy" />
                <Picker.Item label="Straight" value="straight" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Facial Hair:</Text>
              <Picker
                selectedValue={facehair}
                onValueChange={(itemValue, itemIndex) => setFaceHair(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Beard" value="beard" />
                <Picker.Item label="Moustache" value="moustache" />
                <Picker.Item label="Goatee" value="goatee" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Build:</Text>
              <Picker
                selectedValue={build}
                onValueChange={(itemValue, itemIndex) => setBuild(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Thin" value="thin" />
                <Picker.Item label="Average" value="average" />
                <Picker.Item label="Athletic/Toned" value="athletic" />
                <Picker.Item label="Chubby" value="chub" />
                <Picker.Item label="Hefty" value="hefty" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Height:</Text>
              <Picker
                selectedValue={height}
                onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Short" value="short" />
                <Picker.Item label="Average" value="average" />
                <Picker.Item label="Tall" value="tall" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Gender:</Text>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Man" value="man" />
                <Picker.Item label="Woman" value="woman" />
                <Picker.Item label="Transwoman/Transfeminine" value="transfem" />
                <Picker.Item label="Transman/Transmasculin" value="transman" />
                <Picker.Item label="Trans" value="trans" />
                <Picker.Item label="Genderqueer/Non-binary" value="nonbin" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <View style={styles.picker_view}>
              <Text style={styles.dropdown_label}>Glasses:</Text>
              <Picker
                selectedValue={glasses}
                onValueChange={(itemValue, itemIndex) => setGlasses(itemValue)}
                style={styles.picker}
                mode={"dropdown"}
              >
                <Picker.Item label="Don't Know" value="idk" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>

          </ScrollView>

        </View>
      </View>


      <View style={styles.footer_view}>
        <View style={styles.prev_button}>
          <Button
            title="Back"
            color='maroon'
            onPress={() => { navigation.navigate('Type') }}
          />
        </View>

        <Text>Page 4/5</Text>

        <View style={styles.next_button}>
          <Button
            color='maroon'
            title="Next"
            onPress={() => { navigation.navigate('Other') }}
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
    marginBottom: 30,
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
  label: {
    margin: 8,
  },
  dropdown_label: {
    fontSize: 16,
    marginLeft: 10,
  },
  question: {
    flex: 1,
    marginBottom: 20,
  },
  offender_input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  question_label: {
    marginLeft: 10,
    fontSize: 18,
  },
  picker: {
    width: 180,
    height: 50,
  },
  picker_view: {
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  all_pickers: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
  }
});

export default ReportOffenderScreen;
