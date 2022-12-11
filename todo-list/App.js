import { StyleSheet,  View } from 'react-native';
import CreateButton from './src/components/CreateButton';

export default function App() {
  return (
    <View style={styles.container}>
      <CreateButton />
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
