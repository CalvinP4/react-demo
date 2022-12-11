import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function ViewNoteScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>This is a title</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi
        enim, volutpat venenatis viverra eu, porttitor at nibh. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Fusce sagittis libero at tempor tempus. Mauris ut eros arcu.
        Fusce venenatis leo id vehicula bibendum. Mauris lacinia egestas mauris
        ut tempor. Nulla fringilla neque odio, at ultrices leo commodo in.
        Praesent turpis lacus, feugiat eget feugiat vitae, elementum at lectus.
        Pellentesque tincidunt, eros ac blandit suscipit, velit enim tristique
        felis, et efficitur metus risus in metus. Sed volutpat massa eu placerat
        hendrerit. Duis lectus turpis, ultricies ut aliquet ac, ultricies at ex.
        Nulla tempor elit sed feugiat lobortis. Pellentesque porttitor purus ac
        odio euismod, nec eleifend diam blandit. Phasellus tincidunt in ex et
        finibus. Proin gravida, lorem eu congue condimentum, sapien purus
        scelerisque est, sed pharetra urna neque maximus mauris.
      </Text>
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
