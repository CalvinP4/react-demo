import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function ViewNoteScreen({ route, GlobalState }) {
  const { id } = route.params;

  const note = GlobalState.notes.find((note) => note.id === id);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "ZenDots-Regular",
  },
  content: { fontSize: 20, fontStyle: "italic" },
});
