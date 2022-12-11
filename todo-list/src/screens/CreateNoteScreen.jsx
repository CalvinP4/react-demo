import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function CreateNoteScreen({navigation, GlobalState}) {
  const [title, onChangeTitle] = React.useState("");
  const [content, onChangeContent] = React.useState("");


  const createNote = () => {
    GlobalState.setNotes([
        ...GlobalState.notes,
        {
          id: GlobalState.notes.length * 100 + 1,
          title: title,
          content: content,
        },
      ]);
  
      navigation.navigate("Main");
  }

  return (
    <View>
      <TextInput
        style={styles.title}
        placeholder="Title"
        onChangeText={onChangeTitle}
      />
      <TextInput
        multiline
        style={styles.content}
        placeholder="Content"
        numberOfLines={20}
        onChangeText={onChangeContent}
      />
      <TouchableOpacity
        style={
          title === "" || content === ""
            ? styles.buttonDisabled
            : styles.buttonEnabled
        }
        disabled={title === "" || content === ""}
        onPress={createNote}
      >
        <Text style={styles.buttonText}>Add note</Text>
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
