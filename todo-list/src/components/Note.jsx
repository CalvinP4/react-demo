import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Ionicons name={iconName} size={32} />
    </TouchableOpacity>
  );
}

export default function Note({id, title, content}) {
  const printHello = () => {
    console.log("Hello World");
  };

  return (
    <View style={styles.note}>
      <Text style={styles.noteHeader}>{title}</Text>
      <Text>{content}</Text>
      <View style={styles.buttonRow}>
        <IconButton iconName={"trash-bin-outline"} onPress={printHello} />
        <IconButton iconName={"pencil-outline"} onPress={printHello} />
        <IconButton iconName={"arrow-forward-outline"} onPress={printHello} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    backgroundColor: "#C0BBDE",
    borderRadius: 10,
    height: 150,
    width: 360,
    padding: 8,
    margin: 5,
  },
  noteHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 32,
  },
  iconButton: {
    width: 32,
    height: 32,
    marginRight: 32,
  },
});
