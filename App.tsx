import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SoulSync Guardian</Text>
      <Text style={styles.subtitle}>African Cyber Shield • 2025</Text>
      <Text style={styles.score}>Harmony Protected: 100%</Text>

      <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("Shield Active", "All threats neutralised")}>
        <Text style={styles.btnText}>Run Simulation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("Pro Live", "R199/month activated")}>
        <Text style={styles.btnText}>Go Pro – R199/mo</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Built for the continent • Powered by ancestors</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 36, fontWeight: '900', color: '#ff79c6' },
  subtitle: { fontSize: 18, color: '#8be9fd', marginVertical: 20 },
  score: { fontSize: 32, color: '#50fa7b', marginBottom: 50 },
  btn: { backgroundColor: '#bd93f9', padding: 20, borderRadius: 16, width: '85%', marginVertical: 12 },
  btnText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 20 },
  footer: { position: 'absolute', bottom: 50, color: '#6272a4' }
});
