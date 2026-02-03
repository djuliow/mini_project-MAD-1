import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Education() {
  const educationData = [
    {
      school: 'Universitas Klabat',
      degree: 'S1 Fakultas Ilmu Komputer\nJurusan Sistem Informasi',
      year: '2023 - Sekarang',
      icon: 'school',
      color: '#3b82f6',
    },
    {
      school: 'SMA Unklab',
      degree: 'Jurusan IPA',
      year: '2019 - 2022',
      icon: 'book',
      color: '#10b981',
    },
    {
      school: 'SMP N 2 SULTA',
      degree: 'Sekolah Menengah Pertama',
      year: '2016 - 2019',
      icon: 'ribbon',
      color: '#f59e0b',
    },
    {
      school: 'SD Advent Talaitad',
      degree: 'Sekolah Dasar',
      year: '2010 - 2016',
      icon: 'pencil',
      color: '#ef4444',
    },
    {
      school: 'TK Talaitad',
      degree: 'Taman Kanak-kanak',
      year: '2009-2010',
      icon: 'happy',
      color: '#8b5cf6',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>My Education Journey</Text>

      {educationData.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
            <Ionicons name={item.icon as any} size={24} color="#fff" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.schoolName}>{item.school}</Text>
            <Text style={styles.degree}>{item.degree}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
          {/* Garis penghubung antar kartu (visual timeline) */}
          {index !== educationData.length - 1 && <View style={styles.timelineLine} />}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
  },
  degree: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  year: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
    fontWeight: '600',
  },
  timelineLine: {
    position: 'absolute',
    left: 40, // Posisi di tengah ikon (width 50 / 2 + padding 16)
    bottom: -20,
    width: 2,
    height: 20,
    backgroundColor: '#e2e8f0',
  }
});