import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import EmojiButton from "./components/EmojiButton";

function App() {
  const [laughCount, setLaughCount] = useState(0);
  const [winkCount, setWinkCount] = useState(0);

  // arrow function
  const incrementLaughCount = () => {
    setLaughCount(laughCount + 1);
  };

  // regular JS function
  function incrementWinkCount() {
    setWinkCount(winkCount + 1);
  }

  return (
    <>
      <EmojiButton btnImage="laugh.png" onClick={incrementLaughCount} />
      <Display
        text={`I have laughed ${laughCount} times`}
        backgroundColor="red"
        textColor="white"
      />
      <EmojiButton btnImage="wink.png" onClick={incrementWinkCount} />
      <Display
        text={`I have winked ${winkCount} times`}
        backgroundColor="green"
        textColor="yellow"
      />
    </>
  );
}

export default App;
