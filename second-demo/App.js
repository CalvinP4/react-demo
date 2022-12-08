import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import EmojiButton from './src/components/EmojiButton';

export default function App() {
  const [laughCount, setLaughCount] = useState(0);
  const [winkCount, setWinkCount] = useState(0);

  const incrementLaughCount = () => {
    setLaughCount(laughCount + 1);
  } 

  const incrementWinkCount = () => {
    setWinkCount(winkCount + 1);
  }

  return (
    <View style={styles.container}>
      <EmojiButton 
        onPress={incrementLaughCount}
        imgPath={require("./assets/laugh.png")}
      />
      <Display 
        text="I have laughed 0 times"
        backgroundColor="red"
        textColor="white"
      />
      <EmojiButton 
        onPress={incrementLaughCount}
        imgPath={require("./assets/wink.png")}
      />
      <Display 
        text="I have winked 0 times"
        backgroundColor="pink"
        textColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
