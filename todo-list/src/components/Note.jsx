import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Note() {
    return (
        <View style={styles.note}>
            <Text style={styles.noteHeader}>Title</Text>
            <Text>This is some content</Text>
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
});