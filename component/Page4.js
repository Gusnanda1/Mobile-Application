import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { username } from "./Page2";

export default function Page4({ navigation }) {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ display: "flex" }}>
        <Text
          style={{
            fontWeight: "900",
            marginLeft: 20,
            fontSize: 25,
            marginTop: 80,
          }}
        >
          Hi {username}
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

      <View style={BoxList.box}>
        <View>
          <Text
            style={{ fontWeight: "800", fontSize: 12 }}
            onPress={() => navigation.navigate("DetailList")}
          >
            Study - Golang
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "#9B9B9B",
              marginTop: 3,
              marginBottom: 10,
              width: 235,
            }}
          >
            Learn Golang to improve fundamentals and familiarize with coding.
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 8, color: "#9B9B9B" }}>
            <Image
              style={{ marginRight: 3 }}
              source={require("../assets/kalender.png")}
            />
            19 July 2022
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "800",
              backgroundColor: "#81C8FF",
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: "white",
              borderRadius: 5,
            }}
          >
            Study
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginRight: 11,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/bulat.png")} />
          </View>
        </View>
      </View>

      <View style={BoxList.box2}>
        <View>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 12,
              textDecorationLine: "line-through",
            }}
            onPress={() => navigation.navigate("DetailList")}
          >
            Home Work - Mathematics
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "#9B9B9B",
              marginTop: 3,
              marginBottom: 10,
              width: 235,
              textDecorationLine: "line-through",
            }}
          >
            Do homework math probability
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 8, color: "#9B9B9B" }}>
            <Image
              style={{ marginRight: 3 }}
              source={require("../assets/kalender.png")}
            />
            19 July 2022
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "800",
              backgroundColor: "#FF8181",
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: "white",
              borderRadius: 5,
            }}
          >
            Home Work
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginRight: 11,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/Vector.png")} />
          </View>
        </View>
      </View>

      <View style={BoxList.box3}>
        <View>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 12,
              textDecorationLine: "line-through",
            }}
            onPress={() => navigation.navigate("DetailList")}
          >
            Study - HTML
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "#9B9B9B",
              marginTop: 3,
              marginBottom: 10,
              width: 235,
              textDecorationLine: "line-through",
            }}
          >
            Learn HTML to improve fundamentals and familiarize with coding.
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 8, color: "#9B9B9B" }}>
            <Image
              style={{ marginRight: 3 }}
              source={require("../assets/kalender.png")}
            />
            19 July 2022
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "800",
              backgroundColor: "#81C8FF",
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: "white",
              borderRadius: 5,
            }}
          >
            Study
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginRight: 11,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/Vector.png")} />
          </View>
        </View>
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
    fontSize: 16,
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
    fontSize: 16,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    width: 104,
  },
});

const BoxList = StyleSheet.create({
  box: {
    backgroundColor: "#DAEFFF",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    width: "90%",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 18,
  },

  box2: {
    backgroundColor: "#F1FFEF",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 18,
  },

  box3: {
    backgroundColor: "#FFEFEF",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 18,
  },
});
