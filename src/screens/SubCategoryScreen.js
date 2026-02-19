import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { FontSizeContext } from '../context/FontSizeContext';

export default function SubCategoryScreen({ route, navigation }) {
  const { category } = route.params;
  const { fontSize } = useContext(FontSizeContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>◀ Geri</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontSize: fontSize }]}>{category.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {category.subcategories.map((sub) => (
          <TouchableOpacity
            key={sub.id}
            style={styles.subBtn}
            onPress={() => navigation.navigate('Detail', { item: sub })}
            activeOpacity={0.8}
          >
            <Text style={[styles.subText, { fontSize: fontSize }]}>{sub.title}</Text>
            <View style={styles.playIconContainer}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    padding: 12,
    paddingBottom: 30,
  },
  subBtn: {
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
  subText: {
    color: '#fff',
    fontWeight: 'bold',
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
});
