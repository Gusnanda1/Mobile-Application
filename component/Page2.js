import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { API } from "../config/API";
import React, { useState } from "react";
export let username = "";
export let token = "";


export default function Page2({ navigation }) {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...Form,
      [name]: value,
    });
  };
  const handleLogin = async () => {
    try {
      const response = await API.post("/auth/login", Form).then(
        (res) => res.data
      );
      username = response.user.firstName;
      token = response.token;
      userMail = response.user.email;
      alert("Login Successfully!");

      navigation.navigate("Tab");
    } catch (error) {
      alert("Login Failed, Wrong Email or Password");
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
            marginRight: 250,
            marginTop: 10,
          }}
        >
          Login
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
          value={Form.password}
          onChangeText={(value) => {
            handleChange("password", value);
          }}
          placeholder="Password"
          placeholderTextColor={"#999999"}
          secureTextEntry={true}
          style={styles.txtInput}
        ></TextInput>
        <TouchableHighlight onPress={handleLogin}>
          <Text style={styles.button1}>Login</Text>
        </TouchableHighlight>

        <Text style={{ marginTop: 10 }}>
          New Users ?{" "}
          <Text
            style={{ color: "#FF5555" }}
            onPress={() => navigation.navigate("Register")}
          >
            Register
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
    marginTop: 80,
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
