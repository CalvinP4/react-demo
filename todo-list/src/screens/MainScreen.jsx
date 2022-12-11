import Note from "../components/Note";
import { ScrollView } from "react-native";

export default function MainScreen() {
  return (
    <ScrollView style={{ padding: 4, alignSelf: "center", marginBottom: 4 }}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </ScrollView>
  );
}
