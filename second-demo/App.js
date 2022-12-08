import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import EmojiButton from './src/components/EmojiButton';

export default function App() {
  return (
    <View style={styles.container}>
      <EmojiButton />
      <Display 
        text="I have been clicked 0 times"
        backgroundColor="red"
        textColor="white"
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
