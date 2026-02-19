import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { FontSizeContext } from '../context/FontSizeContext';
import * as Speech from 'expo-speech';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const { fontSize } = useContext(FontSizeContext);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    const speaking = await Speech.isSpeakingAsync();
    if (speaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      Speech.speak(item.title + '. ' + item.content, {
        language: 'tr-TR',
        onDone: () => setIsSpeaking(false),
        onError: () => {
          setIsSpeaking(false);
          Alert.alert('Hata', 'Sesli okuma başlatılamadı.');
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>◀ Geri</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontSize: fontSize }]} numberOfLines={2}>
          {item.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Content Card */}
        <View style={styles.card}>
          <Text style={[styles.title, { fontSize: fontSize + 2 }]}>{item.title}</Text>
          <View style={styles.divider} />
          <Text style={[styles.content, { fontSize: fontSize }]}>{item.content}</Text>
        </View>

        {/* Audio button */}
        <TouchableOpacity
          style={[styles.audioBtn, isSpeaking && styles.audioBtnActive]}
          onPress={handleSpeak}
          activeOpacity={0.8}
        >
          <Text style={styles.audioIcon}>{isSpeaking ? '⏹' : '🔊'}</Text>
          <Text style={[styles.audioText, { fontSize: fontSize }]}>
            {isSpeaking ? 'DURDUR' : 'SESLİ DİNLE'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#b3e5fc',
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    marginRight: 12,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    color: '#0277bd',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#29b6f6',
    marginBottom: 14,
    borderRadius: 1,
  },
  content: {
    color: '#333',
    lineHeight: 26,
    textAlign: 'justify',
  },
  audioBtn: {
    backgroundColor: '#29b6f6',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    elevation: 2,
  },
  audioBtnActive: {
    backgroundColor: '#e53935',
  },
  audioIcon: {
    fontSize: 20,
  },
  audioText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
