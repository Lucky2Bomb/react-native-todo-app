import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

export default function InputComponent({ text, setText, placeholder = "" }) {
  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <>
      <Input
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});
