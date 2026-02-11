import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Education() {
  // DATA: Array objek yang menampung daftar riwayat pendidikan.
  // Memisahkan data dari tampilan membuat kode lebih bersih dan mudah diatur.
  const educationData = [
    {
      school: 'Universitas Klabat',
      degree: 'S1 Fakultas Ilmu Komputer\nJurusan Sistem Informasi',
      year: '2023 - Sekarang',
      icon: 'school', // Nama ikon dari library Ionicons
      color: '#3b82f6', // Warna khusus untuk merepresentasikan institusi ini
    },
    {
      school: 'SMA Unklab',
      degree: 'Sekolah Menengah Atas\nJurusan IPA',
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
    // ScrollView digunakan karena daftar pendidikan bisa melebihi tinggi layar HP
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>My Education Journey</Text>

      {/* MAPPING: Fungsi .map() mengulang (loop) data dari array educationData 
          dan mengubahnya menjadi komponen visual satu per satu. */}
      {educationData.map((item, index) => (
        <View key={index} style={styles.card}>
          
          {/* Kotak Ikon: Warna background diambil dari data 'item.color' */}
          <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
            <Ionicons name={item.icon as any} size={24} color="#fff" />
          </View>
          
          {/* Konten Teks: Menampilkan nama sekolah, gelar/jurusan, dan tahun */}
          <View style={styles.cardContent}>
            <Text style={styles.schoolName}>{item.school}</Text>
            <Text style={styles.degree}>{item.degree}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
          
          {/* LOGIKA TIMELINE: Garis vertikal penghubung antar kartu.
              Garis ini TIDAK akan muncul pada item terakhir (index terakhir) 
              agar visual timeline terlihat rapi berhenti di sekolah paling awal. */}
          {index !== educationData.length - 1 && <View style={styles.timelineLine} />}
        </View>
      ))}
    </ScrollView>
  );
}

// STYLE: Mengatur desain visual halaman pendidikan
const styles = StyleSheet.create({
  // Gaya kontainer utama (Latar belakang seluruh halaman)
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Warna abu-abu sangat muda (Slate 50)
  },
  // Memberikan jarak (padding) di sekeliling konten di dalam ScrollView
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  // Gaya judul utama di atas halaman
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 24,
    textAlign: 'center',
  },
  // Gaya kartu putih untuk tiap riwayat sekolah
  card: {
    flexDirection: 'row', // Ikon di kiri, teks di kanan secara mendatar
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3, // Bayangan halus agar kartu terlihat melayang
    alignItems: 'center',
    position: 'relative', // Penting agar garis timeline bisa diposisikan absolut terhadap kartu ini
  },
  // Lingkaran berwarna sebagai tempat ikon
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // Membuat container menjadi lingkaran sempurna
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  // Kontainer teks (Nama sekolah, tahun, dll) agar mengambil sisa ruang yang ada
  cardContent: {
    flex: 1,
  },
  // Gaya teks Nama Sekolah
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
  },
  // Gaya teks Gelar atau Jurusan
  degree: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  // Gaya teks Tahun pendidikan
  year: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
    fontWeight: '600',
  },
  // Garis vertikal tipis yang menghubungkan antar kartu (Timeline)
  timelineLine: {
    position: 'absolute', // Garis diletakkan tanpa memakan ruang/menggeser komponen lain
    left: 40, // Sejajar tepat di bawah tengah lingkaran ikon
    bottom: -20, // Memanjang ke bawah menuju kartu sekolah berikutnya
    width: 3,
    height: 20,
    backgroundColor: '#cbd5e1', // Warna garis abu-abu kebiruan
  }
});