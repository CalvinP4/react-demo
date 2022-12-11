import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CreateButton() {
  return (
    <TouchableOpacity
      style={styles.createButton}
    >
      <Text style={styles.icon}>+</Text>
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
        color: "white"
      }
});