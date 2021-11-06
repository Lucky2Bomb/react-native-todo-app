import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { ListItem, Overlay, Icon, Button, Input } from "react-native-elements";
import ItemDetailsComponent from "./ItemDetailsComponent";

export default function ListItemComponent({ item, index, deleteTaskHandler }) {
  const [visibleOverlay, setVisibleOverlay] = useState(false);

  const toggleOverlay = () => {
    setVisibleOverlay(!visibleOverlay);
  };

  return (
    <>
      <ListItem bottomDivider onPress={toggleOverlay}>
        <Text>{item.text}</Text>
      </ListItem>

      <ItemDetailsComponent
        text={item.text}
        visible={visibleOverlay}
        setVisible={setVisibleOverlay}
        deleteTaskHandler={() => deleteTaskHandler(index)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderBottomWidth: 2,
  },
  text: {
    textAlign: "center",
  },
  pb_5: {
    paddingBottom: 5,
  },
});
