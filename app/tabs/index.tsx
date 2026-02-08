import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Modal } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header Background Image */}
        <Image 
          source={require('../../assets/images/latar.jpg')} 
          style={styles.headerBackground}
          contentFit="cover"
        />
        
        <View style={styles.contentContainer}>
          {/* Profile Image Area */}
          <View style={styles.profileSection}>
            <Pressable 
              style={styles.avatarContainer}
              onPress={() => setModalVisible(true)}
            >
              <Image 
                source={require('../../assets/images/fotoProfil.jpg')} 
                style={styles.avatar}
                contentFit="cover"
                transition={500}
              />
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

          {/* Stats / Quick Info */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1+</Text>
              <Text style={styles.statLabel}>Years Exp</Text>
            </View>
            <View style={styles.divider} />
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

          {/* Portfolio Button */}
          <Pressable 
            style={({ pressed }) => [
              styles.portfolioBtn,
              pressed && styles.portfolioBtnPressed
            ]}
            onPress={() => router.push('/tabs/experience')}
          >
            <Text style={styles.portfolioBtnText}>View Full Portfolio</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </Pressable>

                  {/* Action Buttons (Socials) */}
                  <View style={styles.socialRow}>
                    <Pressable 
                      onPress={() => openLink('https://github.com/djuliow')}
                      style={({ pressed }) => [
                        styles.socialBtn, 
                        { backgroundColor: '#171515' },
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

          {/* Skills Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {['React Native', 'Gemini API', 'Python', 'FastAPI', 'Tailwind CSS', 'ReactJS', 'Supabase', 'Streamlit', 'Machine Learning', 'WhatsApp API'].map((skill, index) => (
                <View key={index} style={styles.skillChip}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Contact Info */}
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

      {/* Full Screen Image Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)} />
          
          <View style={styles.modalContent}>
            <Image 
              source={require('../../assets/images/fotoProfil.jpg')} 
              style={styles.fullImage} 
              contentFit="cover" // Changed to cover to force cropping
              transition={500}
            />
            
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={28} color="#fff" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: 180,
    backgroundColor: '#1a1a1a', // Fallback color
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -75, // Pull content up over the header
    paddingBottom: 80, // Increased padding for better spacing
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
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
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e2e8f0',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
    marginTop: 4,
  },
  bio: {
    textAlign: 'center',
    color: '#334155', // Darker text for better readability
    marginTop: 12,
    lineHeight: 22,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: '#e2e8f0',
    height: '100%',
  },
  portfolioBtn: {
    backgroundColor: '#171717', // Black
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
  portfolioBtnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  portfolioBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
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
  btnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillChip: {
    backgroundColor: '#f3f4f6', // Light Gray
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  skillText: {
    color: '#1f2937', // Dark Gray Text
    fontWeight: '600',
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
  },
  contactText: {
    marginLeft: 12,
    color: '#475569',
    fontSize: 15,
  },
  // Edit Icon for Avatar
  editIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#171717', // Black
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    width: '90%',
    height: '60%', // Reduced height to create more space top/bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 20,
  }
});
