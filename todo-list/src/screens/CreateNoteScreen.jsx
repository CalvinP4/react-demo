import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function CreateNoteScreen() {
    return (
        <View>
            <TextInput 
                style={styles.title}
                placeholder="Title"
            />
            <TextInput 
                multiline
                style={styles.content}
                placeholder="Content"
                numberOfLines={20}
            />
            <TouchableOpacity style={styles.buttonEnabled}>
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
  