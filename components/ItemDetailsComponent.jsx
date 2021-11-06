import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Button, Input, Text } from "react-native-elements";

export default function ItemDetailsComponent({
  visible,
  setVisible,
  text = "",
  deleteTaskHandler = null,
}) {
  console.log(deleteTaskHandler);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <View>
        <Text h4 style={styles.header}>
          Task details
        </Text>
      </View>

      <View style={styles.pb_5}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={(styles.pb_5, styles.buttons)}>
        <View style={{ flex: 1 }}>
          <Button
            title="Delete"
            style={styles.buttonDelete}
            onPress={deleteTaskHandler}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Close"
            type="clear"
            style={styles.buttonClose}
            onPress={toggleOverlay}
          />
        </View>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    minWidth: 300,
  },
  input: {},
  pb_5: {
    paddingBottom: 5,
  },
  header: {
    paddingTop: 5,
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  buttonDelete: {
    flex: 1,
  },
  buttonClose: {
    flex: 1,
  },
});
