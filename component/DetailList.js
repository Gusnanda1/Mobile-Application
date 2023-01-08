import { View, Text, ScrollView, Image } from "react-native";

export default function DetailList() {
  return (
    <ScrollView style={{ paddingTop: 40 }}>
      <View
        name="container"
        style={{
          backgroundColor: "#DAEFFF",
          margin: 25,
          padding: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 22, marginTop: 20 }}>
            Study - Golang
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 5,
                paddingRight: 15,
                paddingBottom: 5,
                borderRadius: 5,
                color: "white",
                fontSize: 10,
                fontWeight: "800",
                backgroundColor: "#81C8FF",
              }}
            >
              Study
            </Text>
            <Image
              source={require("../assets/bulat.png")}
              style={{ marginLeft: 20, marginTop: 15 }}
            ></Image>
          </View>
        </View>
        <Text style={{ fontSize: 10, color: "#9B9B9B", marginTop: 25 }}>
          {" "}
          Learn Golang to improve fundamentals and familiarize with coding.
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B", marginTop: 25 }}>
          Advantages of Go
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          Go has advantages over other languages, including:
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B", marginTop: 25 }}>
          Supports concurrency at the language level with fairly easy
          application
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          Supports data processing with multiple processors at the same time
          (parallel processing)
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          Have a garbage collector
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          The compilation process is very fast
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          it's not strict OOP, giving developers the freedom to how to write
          code.
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B", marginTop: 25 }}>
          Listing Material :
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B", marginTop: 25 }}>
          1. Installation
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          2. Setup Go Modules
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          3. Setup Gopath & Workspace
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>4. Go Command</Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>5. Hello World</Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>6. Variable</Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>
          7. Tipe DataKonstanta
        </Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>8. Operator</Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>9. Condition</Text>
        <Text style={{ fontSize: 10, color: "#9B9B9B" }}>10. Loops</Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          <Image source={require("../assets/kalender.png")} />
          <Text
            style={{
              fontSize: 10,
              color: "#9B9B9B",
              marginLeft: 5,
              marginTop: -4,
            }}
          >
            19 July 2022
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
