import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import * as React from "react";

export default function Page1({ navigation }) {
  return (
    <ScrollView>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("../assets/iconPage1.png")}
          style={styles.img}
        ></Image>
        <Text style={{ fontSize: 42, fontWeight: "800" }}>
          Ways
          <Text style={{ color: "#B82020" }}>
            To<Text style={{ color: "#FF5555" }}>DO</Text>
          </Text>
        </Text>

        <Text style={{ marginTop: 30, fontSize: 12 }}>
          Write your activity and finish your activity.
        </Text>
        <Text style={{ fontSize: 12 }}>Fast, Simple and Easy to Use</Text>
        <TouchableHighlight>
          <Text
            style={styles.button1}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text
            style={styles.button2}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 300,
    marginTop: 30,
  },
  button1: {
    backgroundColor: "#FF5555",
    padding: 10,
    marginTop: 120,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    width: 350,
  },

  button2: {
    backgroundColor: "rgba(0, 0, 0, 0.31)",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    width: 350,
  },
});
