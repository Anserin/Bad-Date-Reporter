import React, { useState } from "react";
import { View, Text, StyleSheet, Picker, Button } from "react-native";

const ReportTimeScreen = function ({ navigation }) {
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2012");

  return (
  <View style={{flex: 1}}>
    <View style={styles.header_view}>
      <Text style={styles.header_text}> Time of Incident </Text>
    </View>
    <View style={styles.form}>
      <Text style={{fontSize: 18, marginTop: 12}}>Date: </Text>
      <Picker
        selectedValue={day}
        onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
        style={{height: 50, width: 90}}
        mode={"dropdown"}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="13" value="13" />
        <Picker.Item label="14" value="14" />
        <Picker.Item label="15" value="15" />
        <Picker.Item label="16" value="16" />
        <Picker.Item label="17" value="17" />
        <Picker.Item label="18" value="18" />
        <Picker.Item label="19" value="19" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="21" value="21" />
        <Picker.Item label="22" value="22" />
        <Picker.Item label="23" value="23" />
        <Picker.Item label="24" value="24" />
        <Picker.Item label="25" value="25" />
        <Picker.Item label="26" value="26" />
        <Picker.Item label="27" value="27" />
        <Picker.Item label="28" value="28" />
        <Picker.Item label="29" value="29" />
        <Picker.Item label="30" value="30" />
        <Picker.Item label="31" value="31" />
      </Picker>
      <Picker
        selectedValue={month}
        onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
        style={{height: 50, width: 130}}
        mode={"dropdown"}
      >
        <Picker.Item label="January" value="January" />
        <Picker.Item label="February" value="February" />
        <Picker.Item label="March" value="March" />
        <Picker.Item label="April" value="March" />
        <Picker.Item label="May" value="May" />
        <Picker.Item label="June" value="June" />
        <Picker.Item label="July" value="July" />
        <Picker.Item label="August" value="August" />
        <Picker.Item label="September" value="September" />
        <Picker.Item label="October" value="October" />
        <Picker.Item label="November" value="November" />
        <Picker.Item label="December" value="December" />
      </Picker>
      <Picker
        selectedValue={year}
        onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
        style={{height: 50, width: 100}}
        mode={"dropdown"}
      >
        <Picker.Item label="2020" value="2020"/>
        <Picker.Item label="2019" value="2019"/>
        <Picker.Item label="2018" value="2018"/>
        <Picker.Item label="2017" value="2017"/>
        <Picker.Item label="2016" value="2016"/>
        <Picker.Item label="2015" value="2015"/>
        <Picker.Item label="2014" value="2014"/>
        <Picker.Item label="2013" value="2013"/>
        <Picker.Item label="2012" value="2012"/>
      </Picker>
    </View>
    <View style={styles.footer_view}>
      <View style={styles.prev_button}>
        <Button 
          title="Back" 
          onPress={function(){navigation.navigate('Report')}}
        />
      </View>
      <View style={styles.next_button}>
        <Button 
          title="Next" 
          onPress={function(){navigation.navigate('Location')}}
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
    flexDirection: "row",
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
  }
});

export default ReportTimeScreen;