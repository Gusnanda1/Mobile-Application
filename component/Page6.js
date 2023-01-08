import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { API } from "../config/API";
import { token } from "./Page2";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
export default function Page6() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    handleChange("date", date.toLocaleDateString());
    hideDatePicker();
  };

  const DataCategories = [];
  const [Categories, setCategories] = useState([
    {
      id: "",
      category_name: "",
    },
  ]);

  const [dataList, setDataList] = useState({
    name: "",
    category_name: "",
    date: "",
    description: "",
  });

  const handlePostList = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await API.post("/List", dataList, config);
      alert("Add List successfully");
      getCatogeries();
    } catch (error) {
      console.log(error);
    }
  };
  const getCatogeries = async () => {
    try {
      const response = await API.get("/Category");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (keyName, valueKey) => {
    setDataList({
      ...dataList,
      [keyName]: valueKey,
    });
  };

  useEffect(() => {
    getCatogeries();
  }, [Categories]);

  Categories?.map((item, index) => {
    DataCategories[index] = item.category_name;
    return item.category_name;
  });

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
        Add List
      </Text>

      <TextInput
        value={dataList.name}
        onChangeText={(value) => {
          handleChange("name", value);
        }}
        placeholder="Name"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput>
      {/* <TextInput
        placeholder="Category"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput> */}
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <SelectDropdown
          data={DataCategories}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            handleChange("category_name", selectedItem);
          }}
          defaultButtonText={"Select category"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>

      <Text
        onPress={showDatePicker}
        // value={dataList.date}
        // onChangeText={(value) => {
        //   handleChange("date", value);
        // }}
        style={styles.txtInput}
      >
        {selectedDate.toLocaleDateString()}
      </Text>

      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        value={dataList.description}
        onChangeText={(value) => {
          handleChange("description", value);
        }}
        multiline
        numberOfLines={4}
        placeholder="Description"
        placeholderTextColor={"#999999"}
        style={styles.txtInput}
      ></TextInput>
      <TouchableHighlight>
        <Text style={styles.button} onPress={handlePostList}>
          Add List
        </Text>
      </TouchableHighlight>
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
  button: {
    backgroundColor: "#FF5555",
    padding: 10,
    marginTop: 70,
    marginBottom: 272,
    marginLeft: 20,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    width: 350,
  },
  dropdown1BtnStyle: {
    width: "94%",
    height: 54,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    borderWidth: 1,

    borderColor: "#444",
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
});
