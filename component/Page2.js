import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default function Page2() {
  return (
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
        placeholder="Email"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#999999"}
        secureTextEntry={true}
        style={styles.txtInput}
      ></TextInput>
      <TouchableHighlight>
        <Text style={styles.button1}>Login</Text>
      </TouchableHighlight>
      <Text style={{ marginTop: 10 }}>
        New Users ? <Text style={{ color: "#FF5555" }}> Register </Text>
      </Text>
    </View>
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
