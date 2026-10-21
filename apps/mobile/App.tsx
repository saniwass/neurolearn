import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeuroLearn</Text>
      <Text style={styles.subtitle}>Lernen, das deinem Gehirn entspricht.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heutiger Lernplan</Text>
        <Text style={styles.cardText}>Deutsch · 25 min</Text>
        <Text style={styles.cardText}>Französisch · 20 min</Text>
        <Text style={styles.cardText}>Mathe · 30 min</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1020',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    color: '#EAF0FF',
    fontSize: 32,
    fontWeight: '700'
  },
  subtitle: {
    color: '#8FA3C7',
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center'
  },
  card: {
    marginTop: 28,
    width: '100%',
    backgroundColor: '#121A2B',
    borderRadius: 18,
    padding: 20,
    borderColor: '#1F2A3C',
    borderWidth: 1
  },
  cardTitle: {
    color: '#EAF0FF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12
  },
  cardText: {
    color: '#D5E1FF',
    fontSize: 16,
    marginBottom: 8
  }
});
