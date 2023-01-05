import { StyleSheet, View } from "react-native";
import PageIndex from "./component/Page1";
import PageLogin from "./component/Page2";
import PageRegister from "./component/Page3";
import PageProfile from "./component/Page4";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  return (
    <View style={styles.container}>
      <PageProfile></PageProfile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
