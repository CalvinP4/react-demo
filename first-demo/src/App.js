import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import EmojiButton from "./components/EmojiButton";

function App() {

  const [laughCount, setLaughCount] = useState(2);
  const [winkCount, setWinkCount] = useState(0);


  const printHello = () => {
    console.log("Hello");
}

  return (
    <>
      <EmojiButton btnImage="laugh.png" onClick={printHello} />
      <Display
        text={`I have laughed ${laughCount} times`}
        backgroundColor="red"
        textColor="white"
      />
      <EmojiButton btnImage="wink.png" onClick={printHello} />
      <Display
        text={`I have laughed ${winkCount} times`}
        backgroundColor="green"
        textColor="yellow"
      />
    </>
  );
}

export default App;
