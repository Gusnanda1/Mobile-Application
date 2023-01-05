import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function Page4() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  return (
    <View style={{ width: "100%" }}>
      <View style={{ display: "flex" }}>
        <Text style={{ fontWeight: "900", marginLeft: 20, fontSize: 25 }}>
          Hi Bagus
        </Text>
        <Text style={{ fontWeight: "400", marginLeft: 20, color: "#FF5555" }}>
          200 List
        </Text>
      </View>
      <Image
        source={require("../assets/LoginIcon.png")}
        style={styles.imgProfile}
      ></Image>
      <TextInput
        placeholder="Search List......"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={styles.txtInput2}
          placeholder="Choose Date"
        ></TextInput>
        <TextInput style={styles.txtInput2} placeholder="Category"></TextInput>
        <TextInput style={styles.txtInput2} placeholder="Status"></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgProfile: {
    width: 70,
    height: 70,
    borderWidth: 3,
    marginLeft: 300,
    marginTop: -70,
    borderRadius: 100,
    borderColor: "#FF5555",
    resizeMode: "stretch",
  },
  txtInput: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 5,
    color: "black",
    fontSize: 18,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    width: 350,
  },
  txtInput2: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 5,
    color: "black",
    fontSize: 18,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    width: 104,
  },
});
