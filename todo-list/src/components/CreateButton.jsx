import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function CreateButton() {
  return (
    <TouchableOpacity
      style={{
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
      }}
    >
      <Text style={{ fontSize: 50, color: "white" }}>+</Text>
    </TouchableOpacity>
  );
}
