import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeuroLearn</Text>
      <Text style={styles.subtitle}>Lernen, das deinem Gehirn entspricht.</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1020',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#EAF0FF',
    fontSize: 32,
    fontWeight: '700'
  },
  subtitle: {
    color: '#8FA3C7',
    fontSize: 18,
    marginTop: 12
  }
});
