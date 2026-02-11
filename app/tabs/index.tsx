import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Modal } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  // Variabel state untuk mengatur muncul/tidaknya modal (pop-up) foto profil
  const [modalVisible, setModalVisible] = useState(false);
  
  // Hook navigasi untuk pindah antar halaman
  const router = useRouter();

  // Fungsi untuk membuka link eksternal (seperti GitHub/LinkedIn) di browser perangkat
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Gagal memuat halaman", err));
  };

  return (
    <>
      {/* ScrollView digunakan agar konten yang panjang bisa di-scroll ke bawah */}
      <ScrollView style={styles.container}>
        
        {/* Gambar latar belakang di bagian paling atas (Header) */}
        <Image 
          source={require('../../assets/images/latar.jpg')} 
          style={styles.headerBackground}
          contentFit="cover"
        />
        
        {/* Kontainer utama untuk seluruh teks dan informasi profil */}
        <View style={styles.contentContainer}>
          
          {/* Bagian Foto Profil, Nama, dan Deskripsi Singkat */}
          <View style={styles.profileSection}>
            {/* Pressable membungkus foto profil agar bisa merespon sentuhan (untuk memperbesar) */}
            <Pressable 
              style={styles.avatarContainer}
              onPress={() => setModalVisible(true)} // Mengubah state modal menjadi true saat diklik
            >
              <Image 
                source={require('../../assets/images/fotoProfil.jpg')} 
                style={styles.avatar}
                contentFit="cover"
                transition={500} // Efek transisi halus saat gambar muncul
              />
              {/* Badge ikon kecil di pojok foto untuk memberi tahu user bahwa foto bisa diklik */}
              <View style={styles.editIconBadge}>
                <Ionicons name="expand-outline" size={16} color="#fff" />
              </View>
            </Pressable>
            
            <Text style={styles.name}>Julio Derill Juan Weol</Text>
            <Text style={styles.title}>AI & Full-stack Developer</Text>
            <Text style={styles.bio}>
              Spesialis aplikasi AI & sistem manajemen terpadu. Menguasai integrasi Gemini API, Machine Learning (k-NN), dan teknologi modern untuk solusi digital inovatif.
            </Text>
          </View>

          {/* Bagian Statistik (Pengalaman, Proyek, Klien) - Disusun secara horizontal (Baris) */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3+</Text>
              <Text style={styles.statLabel}>Years Exp</Text>
            </View>
            <View style={styles.divider} /> {/* Garis vertikal pemisah antar statistik */}
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Clients</Text>
            </View>
          </View>

          {/* Tombol interaktif untuk pindah ke halaman 'Experience' */}
          <Pressable 
            style={({ pressed }) => [
              styles.portfolioBtn,
              pressed && styles.portfolioBtnPressed // Efek visual saat tombol ditekan
            ]}
            onPress={() => router.push('/tabs/experience')}
          >
            <Text style={styles.portfolioBtnText}>View Full Portfolio</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </Pressable>

          {/* Barisan tombol Media Sosial (GitHub, LinkedIn, Instagram) */}
          <View style={styles.socialRow}>
            <Pressable 
              onPress={() => openLink('https://github.com/djuliow')}
              style={({ pressed }) => [
                styles.socialBtn, 
                { backgroundColor: '#171515' }, // Warna khas masing-masing platform
                pressed && styles.btnPressed
              ]}
            >
              <Ionicons name="logo-github" size={20} color="#fff" />
            </Pressable>
            
            <Pressable 
              onPress={() => openLink('https://www.linkedin.com/in/julio-derill-juan-weol-4b358a387/')}
              style={({ pressed }) => [
                styles.socialBtn, 
                { backgroundColor: '#0A66C2' },
                pressed && styles.btnPressed
              ]}
            >
              <Ionicons name="logo-linkedin" size={20} color="#fff" />
            </Pressable>
            
            <Pressable 
              style={({ pressed }) => [
                styles.socialBtn, 
                { backgroundColor: '#E4405F' },
                pressed && styles.btnPressed
              ]}
            >
              <Ionicons name="logo-instagram" size={20} color="#fff" />
            </Pressable>
          </View>

          {/* Bagian Keahlian (Skills) - Menampilkan daftar keahlian dalam bentuk Chip/Tag */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {/* Mapping: Mengambil daftar skill dan merendernya satu per satu secara otomatis */}
              {['React Native', 'Gemini API', 'Python', 'FastAPI', 'Tailwind CSS', 'ReactJS', 'Supabase', 'Streamlit', 'Machine Learning', 'WhatsApp API'].map((skill, index) => (
                <View key={index} style={styles.skillChip}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Bagian Kontak Info - Informasi alamat email, telepon, dan lokasi */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <View style={styles.contactItem}>
              <Ionicons name="mail" size={20} color="#64748b" />
              <Text style={styles.contactText}>weoljulioderill@example.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="call" size={20} color="#64748b" />
              <Text style={styles.contactText}>+62 858 2390 5410</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="location" size={20} color="#64748b" />
              <Text style={styles.contactText}>Manado, Indonesia</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* MODAL FULL SCREEN: Muncul saat foto profil diklik, berfungsi untuk "Zoom" gambar profil */}
      <Modal
        visible={modalVisible}
        transparent={true} // Agar background di belakang gambar tetap terlihat gelap transparan
        animationType="fade" // Efek muncul perlahan (memudar)
        onRequestClose={() => setModalVisible(false)} // Menutup modal saat tombol 'back' perangkat ditekan
      >
        <View style={styles.modalContainer}>
          {/* Latar belakang hitam transparan yang bisa diklik untuk menutup modal */}
          <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)} />
          
          <View style={styles.modalContent}>
            <Image 
              source={require('../../assets/images/fotoProfil.jpg')} 
              style={styles.fullImage} 
              contentFit="cover" 
              transition={500}
            />
            
            {/* Tombol 'X' (tutup) di pojok atas modal */}
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={28} color="#fff" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}


// STYLE DEFINITION: Mengatur tampilan visual (desain) dari setiap komponen di atas
const styles = StyleSheet.create({
  // Gaya untuk kontainer utama halaman
  container: {
    flex: 1,
    backgroundColor: '#fff', // Latar belakang putih bersih
  },
  // Gaya untuk gambar latar belakang di bagian atas (Header)
  headerBackground: {
    height: 180,
    backgroundColor: '#1a1a1a', 
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10, // Memberikan efek bayangan di Android
  },
  // Kontainer isi profil yang ditarik ke atas agar menumpuk di header
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -75, // Menarik konten naik ke atas gambar header
    paddingBottom: 80,
  },
  // Posisi teks nama dan bio agar berada di tengah
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  // Bingkai putih di sekitar foto profil
  avatarContainer: {
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  // Gaya untuk foto profil bulat
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // Membuat foto bulat sempurna
    backgroundColor: '#e2e8f0',
  },
  // Gaya teks Nama Utama
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 16,
  },
  // Gaya teks Jabatan/Title
  title: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
    marginTop: 4,
  },
  // Gaya teks Bio/Deskripsi diri
  bio: {
    textAlign: 'center',
    color: '#334155',
    marginTop: 12,
    lineHeight: 22,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  // Kotak abu-abu untuk area statistik (Exp, Projects, Clients)
  statsContainer: {
    flexDirection: 'row', // Menyusun item secara horizontal (baris)
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  // Gaya tiap item angka di dalam statistik
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  // Gaya angka besar di statistik
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  // Gaya label teks di bawah angka statistik
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  // Garis tipis pemisah antar statistik
  divider: {
    width: 1,
    backgroundColor: '#e2e8f0',
    height: '100%',
  },
  // Tombol utama 'View Full Portfolio'
  portfolioBtn: {
    backgroundColor: '#171717', // Warna hitam solid
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    gap: 8,
  },
  // Efek saat tombol ditekan (sedikit mengecil)
  portfolioBtnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  // Gaya teks di dalam tombol portfolio
  portfolioBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Baris untuk ikon sosial media
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  // Lingkaran tombol sosial media
  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // Efek tekan untuk tombol sosial media
  btnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  // Jarak antar seksi (Skills, Contact)
  section: {
    marginBottom: 24,
  },
  // Gaya judul seksi (Skills, Contact)
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  // Kontainer untuk deretan chip skill
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Agar chip pindah ke baris baru jika penuh
    gap: 10,
  },
  // Gaya tiap kotak skill (Chip)
  skillChip: {
    backgroundColor: '#f3f4f6', 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  // Gaya teks di dalam chip skill
  skillText: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 14,
  },
  // Baris informasi kontak
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
  },
  // Gaya teks informasi kontak (Email, Telp)
  contactText: {
    marginLeft: 12,
    color: '#475569',
    fontSize: 15,
  },
  // Lingkaran kecil ikon ekspansi di foto profil
  editIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#171717',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  // Latar belakang gelap saat modal dibuka
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  // Area di luar gambar modal yang bisa diklik untuk menutup
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // Kontainer untuk gambar full screen di dalam modal
  modalContent: {
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Gaya gambar ukuran penuh di modal
  fullImage: {
    width: '100%',
    height: '100%',
  },
  // Tombol tutup (X) di pojok modal
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 20,
  }
});

