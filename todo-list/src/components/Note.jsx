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

export default function Note({ id, title, content, onView, onDelete, onEdit }) {
  const truncateContent = (content) => {
    if (content.length < 100) return content;

    return content.slice(0, 97) + "...";
  };

  return (
    <View style={styles.note}>
      <Text style={styles.noteHeader}>{title}</Text>
      <Text>{truncateContent(content)}</Text>
      <View style={styles.buttonRow}>
        <IconButton
          iconName={"trash-bin-outline"}
          onPress={() => onDelete(id)}
        />
        <IconButton iconName={"pencil-outline"} onPress={() => onEdit(id)} />
        <IconButton
          iconName={"arrow-forward-outline"}
          onPress={() => onView(id)}
        />
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
