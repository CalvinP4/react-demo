import Note from "../components/Note";
import { ScrollView } from "react-native";
import CreateButton from "../components/CreateButton";

export default function MainScreen({ navigation, GlobalState }) {
  return (
    <>
      <ScrollView style={{ padding: 4, alignSelf: "center", marginBottom: 4 }}>
        {GlobalState.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        ))}
      </ScrollView>
      <CreateButton />
    </>
  );
}
