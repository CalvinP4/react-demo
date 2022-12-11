import Note from "../components/Note";
import { ScrollView } from "react-native";
import CreateButton from "../components/CreateButton";

export default function MainScreen({ navigation, GlobalState }) {
  const navigateToViewNoteScreen = (id) => {
    navigation.navigate("Note", { id });
  };

  const navigateToCreateNoteScreen = () => {
    navigation.navigate("Create");
  };

  const navigateToEditNoteScreen = (id) => {
    navigation.navigate("Edit", {id});
  }

  const deleteNote = (id) => {
    const updatedNotes = GlobalState.notes.filter((note) => note.id !== id);
    GlobalState.setNotes(updatedNotes);
  };

  return (
    <>
      <ScrollView style={{ padding: 4, alignSelf: "center", marginBottom: 4 }}>
        {GlobalState.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onView={navigateToViewNoteScreen}
            onDelete={deleteNote}
            onEdit={navigateToEditNoteScreen}
          />
        ))}
      </ScrollView>
      <CreateButton onPress={navigateToCreateNoteScreen} />
    </>
  );
}
