import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import React, { useEffect, useState } from "react";

import { token } from "./Page2";
import { API } from "../config/API";
export default function Page5() {
  const [Category, setCategory] = useState("");

  const handleChange = (value) => {
    setCategory(value);
  };

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await API.post(
        "/Category",
        { category_name: Category },
        config
      );
      alert("Add category successfully");
      getCatogeries();
    } catch (error) {
      console.log(error);
    }
  };

  const [Categories, setCategories] = useState([]);

  const getCatogeries = async () => {
    try {
      const response = await API.get("/Category");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCatogeries();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          fontWeight: "800",
          marginLeft: 20,
          fontSize: 25,
          marginTop: 80,
        }}
      >
        Add Category
      </Text>

      <TextInput
        value={Category}
        onChangeText={(value) => handleChange(value)}
        placeholder="Name"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput>
      <TouchableHighlight onPress={handleSubmit}>
        <Text style={styles.button1}>Add Category</Text>
      </TouchableHighlight>

      <Text
        style={{
          fontWeight: "800",
          marginLeft: 24,
          fontSize: 25,
          marginTop: 90,
        }}
      >
        List Category
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: 17,
        }}
      >
        {Categories.map((item, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              margin: 8,
              fontSize: 12,
              borderRadius: 5,
              textAlign: "center",
              padding: 8,
              backgroundColor: "#81C8FF",
            }}
          >
            {item.category_name}
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  button1: {
    backgroundColor: "#FF5555",
    padding: 10,
    marginTop: 40,
    marginLeft: 20,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    width: 350,
  },
});
