import "./App.css";
import Display from "./components/Display";
import EmojiButton from "./components/EmojiButton";

function App() {
  return (
    <>
      <EmojiButton btnImage="laugh.png" />
      <Display
        text="I have laughed 5 times"
        backgroundColor="red"
        textColor="white"
      />
      <EmojiButton btnImage="wink.png" />
      <Display
        text="I have winked 5 times"
        backgroundColor="green"
        textColor="yellow"
      />
    </>
  );
}

export default App;
