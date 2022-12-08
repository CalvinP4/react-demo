import './App.css';
import Display from './components/Display';
import EmojiButton from './components/EmojiButton';

function App() {
  return (
    <>
    <EmojiButton 
      btnImage="laugh.png"
    />
    <Display 
      text="I have been clicked 5 times"
      backgroundColor="red"
      textColor="white"
    />
    </>
  );
}

export default App;
