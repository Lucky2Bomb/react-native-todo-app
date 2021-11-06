import React, { useState } from "react";
import { StyleSheet } from "react-native";
import HeaderComponent from "./components/HeaderComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListComponent from "./components/ListComponent";
import FormAddTaskComponent from "./components/FormAddTaskComponent";

export default function App() {
  const [list, setList] = useState([
    { text: "Go to market" },
    { text: "Buy milk" },
    { text: "Buy bread" },
  ]);

  const addTaskHandler = (text) => {
    setList((list) => {
      return [
        ...list,
        {
          text,
        },
      ];
    });
  };

  const deleteTaskHandler = (key) => {
    setList((list) => {
      return list.filter((item, index) => index != key);
    });
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderComponent />
      <FormAddTaskComponent props={{ addTaskHandler }} />
      <ListComponent list={list} deleteTaskHandler={deleteTaskHandler} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
});
