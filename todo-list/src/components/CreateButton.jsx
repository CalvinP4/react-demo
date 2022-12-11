import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CreateButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.createButton} onPress={onPress}>
      <Ionicons name="add" size={32} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createButton: {
    elevation: 4,
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#401E5B",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 8,
    right: 4,
  },
  icon: {
    fontSize: 50,
    color: "white",
  },
});
