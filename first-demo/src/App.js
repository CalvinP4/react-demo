import "./App.css";
import Display from "./components/Display";
import EmojiButton from "./components/EmojiButton";

function App() {

  const printHello = () => {
    console.log("Hello");
}

  return (
    <>
      <EmojiButton btnImage="laugh.png" onClick={printHello} />
      <Display
        text="I have laughed 5 times"
        backgroundColor="red"
        textColor="white"
      />
      <EmojiButton btnImage="wink.png" onClick={printHello} />
      <Display
        text="I have winked 5 times"
        backgroundColor="green"
        textColor="yellow"
      />
    </>
  );
}

export default App;
