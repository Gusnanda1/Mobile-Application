import { StyleSheet } from "react-native";
import * as React from "react";
import PageIndex from "./component/Page1";
import PageLogin from "./component/Page2";
import PageRegister from "./component/Page3";
import PageCategory from "./component/Page5";
import PageList from "./component/Page6";
import PageProfile from "./component/Page4";
import DetailList from "./component/DetailList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigate from "./component/TabNavigate";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={PageLogin}
          options={{
            headerShown: true,
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Home"
          component={PageIndex}
          options={{
            headerShown: true,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Register"
          component={PageRegister}
          options={{
            headerShown: true,
            title: "Register",
          }}
        />

        <Stack.Screen name="Profile" component={PageProfile} />

        <Stack.Screen name="AddCategory" component={PageCategory} />

        <Stack.Screen name="AddList" component={PageList} />
        <Stack.Screen
          name="DetailList"
          options={{ headerShown: false }}
          component={DetailList}
        />
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false }}
          component={TabNavigate}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
