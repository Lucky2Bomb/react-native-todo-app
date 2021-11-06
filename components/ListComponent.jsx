import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import ListItemComponent from "./ListItemComponent";

export default function ListComponent(props) {
  const listItem = ({ item, index }) => (
    <ListItemComponent
      item={item}
      index={index}
      deleteTaskHandler={props.deleteTaskHandler}
    />
  );

  return (
    <>
      <View>
        <FlatList
          data={props.list}
          renderItem={listItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
