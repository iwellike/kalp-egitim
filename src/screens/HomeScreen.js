import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { categories } from '../data/content';
import { FontSizeContext } from '../context/FontSizeContext';

export default function HomeScreen({ navigation }) {
  const { fontSize } = useContext(FontSizeContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Settings button */}
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>

        {/* Category list */}
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.categoryBtn}
            onPress={() => navigation.navigate('SubCategory', { category: cat })}
            activeOpacity={0.8}
          >
            <Text style={[styles.categoryText, { fontSize: fontSize }]}>{cat.title}</Text>
            <View style={styles.playIconContainer}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerTitle, { fontSize: fontSize + 2 }]}>
            AÇIK KALP AMELİYATI HASTA EĞİTİM KİTAPÇIĞI
          </Text>
          <Text style={[styles.footerSubtitle, { fontSize: fontSize + 2 }]}>
            KALBİNİZE İYİ BAKIN
          </Text>
          {/* Heart image placeholder */}
          <View style={styles.heartContainer}>
            <Text style={styles.heartEmoji}>❤️</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#b3e5fc',
  },
  container: {
    padding: 12,
    paddingBottom: 30,
  },
  settingsBtn: {
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 4,
  },
  settingsIcon: {
    fontSize: 24,
  },
  categoryBtn: {
    backgroundColor: '#29b6f6',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    flex: 1,
    textAlign: 'center',
  },
  playIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  playIcon: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerTitle: {
    color: '#e53935',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  footerSubtitle: {
    color: '#e53935',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  heartContainer: {
    marginTop: 16,
  },
  heartEmoji: {
    fontSize: 80,
  },
});
