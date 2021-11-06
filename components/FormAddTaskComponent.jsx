import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, FAB } from "react-native-elements";
// import Icon from "react-native-vector-icons/MaterialIcons";

import InputComponent from "./InputComponent";

export default function FormAddTaskComponent({ props }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.form}>
      <View style={styles.inputWrapper}>
        <InputComponent
          // props={{ text, setText, placeholder: "add new task..." }}
          text={text}
          setText={setText}
          placeholder={"add new task..."}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="add"
          style={styles.button}
          disabled={text == ""}
          onPress={() => {
            props.addTaskHandler(text);
            setText("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingBottom: 0,
  },
  inputWrapper: {
    flex: 4,
  },
  buttonWrapper: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});
