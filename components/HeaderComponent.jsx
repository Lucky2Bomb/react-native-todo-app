import React from "react";
import { StyleSheet, Text } from "react-native";
import { Header } from "react-native-elements";

export default function HeaderComponent() {
  return (
    <>
      <Header centerComponent={<Text style={styles.text}>Todo list</Text>} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#FFF",
  },
});
