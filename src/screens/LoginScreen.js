import React, { Component } from "react";
import {View, Button, Text, StyleSheet, TextInput} from "react-native";

const LoginScreen = function({navigation}) {
  const [username, on_change_username] = React.useState('');
  const [password, on_change_password] = React.useState('');

  return (
    <View style={styles.main_view}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}>Login</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input_view}>
          <TextInput 
            style={styles.input}
            onChangeText={text => on_change_username(text)}
            value={username}
            placeholder={"Username"}
          />
        </View>
        <View style={styles.input_view}>
          <TextInput 
            style={styles.input}
            onChangeText={text => on_change_password(text)}
            value={password}
            placeholder={"Password"}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.signin_view}>
          <Button 
            title="Sign in"
            onPress={function(){navigation.navigate('Home')}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
  },
  header_view: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  header_text: {
    textAlign: "center",
    fontSize: 25,
  },
  form: {
    flex: 9,
    alignContent: "center",
    marginTop: 100,
  },
  input_view: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  input: {
    height: 30,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "flex-end",
  },
  signin_view: {
    width: 100,
    height: 20,
    marginTop: 20,
    alignSelf: "center",
  }
});

export default LoginScreen;
