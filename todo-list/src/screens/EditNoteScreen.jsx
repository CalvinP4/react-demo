import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function EditNoteScreen({ route, navigation, GlobalState }) {
  const { id } = route.params;
  const note = GlobalState.notes.find((note) => note.id === id);

  const [title, onChangeTitle] = React.useState(note.title);
  const [content, onChangeContent] = React.useState(note.content);

  const editNote = () => {
    GlobalState.setNotes([
      {
        id: note.id,
        title: title,
        content: content,
      },
      ...GlobalState.notes.filter((n) => n.id != note.id),
    ]);
    
    navigation.navigate("Main");
  };

  return (
    <View>
      <TextInput
        style={styles.title}
        placeholder="Title"
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        multiline
        style={styles.content}
        placeholder="Content"
        numberOfLines={20}
        onChangeText={onChangeContent}
        value={content}
      />
      <TouchableOpacity
        style={
          title === "" || content === ""
            ? styles.buttonDisabled
            : styles.buttonEnabled
        }
        disabled={title === "" || content === ""}
        onPress={editNote}
      >
        <Text style={styles.buttonText}>Edit note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: "#C0BBDE",
    padding: 4,
  },
  content: {
    borderWidth: 1,
    borderColor: "#C0BBDE",
    margin: 10,
    padding: 4,
  },
  buttonDisabled: {
    alignItems: "center",
    backgroundColor: "#D1BCE0",
    padding: 10,
    margin: 10,
  },
  buttonEnabled: {
    alignItems: "center",
    backgroundColor: "#8225C4",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
});
