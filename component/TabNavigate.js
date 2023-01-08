import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PageCategory from "./Page5";
import PageList from "./Page6";
import PageProfile from "./Page4";

const Tab = createBottomTabNavigator();
export default function TabNavigate() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "Profile") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name == "AddCategory") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name == "AddList") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF5555",
        tabBarInactiveTintColor: "#D9D9D9",
      })}
    >
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={PageProfile}
      />

      <Tab.Screen
        name="AddList"
        options={{ headerShown: false }}
        component={PageList}
      />
      <Tab.Screen
        name="AddCategory"
        options={{ headerShown: false }}
        component={PageCategory}
      />
    </Tab.Navigator>
  );
}
