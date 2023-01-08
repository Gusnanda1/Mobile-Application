import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { API } from "../config/API";
import React, { useState } from "react";

export default function Page3({ navigation }) {
  const [Form, setForm] = useState({
    email: "",
    firstName: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...Form,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await API.post("/auth/register", Form);
      alert("Register Successfully!");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("../assets/LoginIcon.png")}
          style={styles.img}
        ></Image>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "800",
            marginRight: 209,
            marginTop: 10,
          }}
        >
          Register
        </Text>

        <TextInput
          value={Form.email}
          onChangeText={(value) => {
            handleChange("email", value);
          }}
          placeholder="Email"
          placeholderTextColor={"#999999"}
          style={styles.txtInput}
        ></TextInput>
        <TextInput
          value={Form.firstName}
          onChangeText={(value) => {
            handleChange("firstName", value);
          }}
          placeholder="Name"
          placeholderTextColor={"#999999"}
          style={styles.txtInput}
        ></TextInput>
        <TextInput
          value={Form.password}
          onChangeText={(value) => {
            handleChange("password", value);
          }}
          placeholder="Password"
          placeholderTextColor={"#999999"}
          secureTextEntry={true}
          style={styles.txtInput}
        ></TextInput>
        <TouchableHighlight onPress={handleRegister}>
          <Text style={styles.button1}>Register</Text>
        </TouchableHighlight>
        <Text style={{ marginTop: 10 }}>
          Joined us before ?{" "}
          <Text
            style={{ color: "#FF5555" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 290,

    height: 220,
    marginTop: 30,
    resizeMode: "stretch",
  },
  button1: {
    backgroundColor: "#FF5555",
    padding: 10,
    marginTop: 70,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    width: 350,
  },

  txtInput: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    color: "black",
    fontSize: 18,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    width: 350,
  },
  // button2: {
  //   backgroundColor: "rgba(0, 0, 0, 0.31)",
  //   padding: 10,
  //   marginTop: 10,
  //   borderRadius: 5,
  //   color: "white",
  //   fontSize: 18,
  //   fontWeight: "800",
  //   textAlign: "center",
  //   width: 350,
  // },
});
