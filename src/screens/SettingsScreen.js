import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { FontSizeContext } from '../context/FontSizeContext';

const SIZES = [
  { label: 'KÜÇÜK', value: 13 },
  { label: 'ORTA', value: 16 },
  { label: 'BÜYÜK', value: 20 },
];

export default function SettingsScreen({ navigation }) {
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const getSizeLabel = () => {
    if (fontSize <= 13) return 'KÜÇÜK';
    if (fontSize <= 16) return 'ORTA';
    return 'BÜYÜK';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>◀ Geri</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AYARLAR</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Menü yazı boyutu</Text>

        <View style={styles.card}>
          {SIZES.map((s) => (
            <TouchableOpacity
              key={s.label}
              style={[
                styles.sizeOption,
                fontSize === s.value && styles.sizeOptionActive,
              ]}
              onPress={() => setFontSize(s.value)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.sizeText,
                  { fontSize: s.value },
                  fontSize === s.value && styles.sizeTextActive,
                ]}
              >
                {s.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Navigation buttons */}
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.navBtnText}>ANASAYFA'YA GİT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBtn, styles.navBtnSecondary]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.navBtnText}>GERİ</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 17,
  },
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 15,
    color: '#01579b',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginBottom: 24,
  },
  sizeOption: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  sizeOptionActive: {
    backgroundColor: '#4caf50',
  },
  sizeText: {
    color: '#333',
    fontWeight: '600',
  },
  sizeTextActive: {
    color: '#fff',
  },
  navBtn: {
    backgroundColor: '#29b6f6',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  navBtnSecondary: {
    backgroundColor: '#0288d1',
  },
  navBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
