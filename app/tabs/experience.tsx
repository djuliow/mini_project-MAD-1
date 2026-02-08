import { View, Text, StyleSheet, SectionList, Pressable, Modal, Linking } from 'react-native';
import { Image } from 'expo-image';
import React, { useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';

// --- DATA DEFINED OUTSIDE COMPONENT (PERFORMANCE OPTIMIZATION) ---
const projects = [
  {
    title: 'CartaAI',
    description: 'Platform undangan digital berbasis AI. Pengguna dapat membuat desain dan konten undangan unik cukup dengan memberikan prompt teks yang akan diproses oleh Gemini API.',
    tags: ['ReactJS', 'FastAPI', 'Gemini API', 'Supabase', 'Python'],
    status: 'Active',
    color: '#3b82f6', // Blue
    images: [require('../../assets/images/project1.jpg')]
  },
  {
    title: 'Sistem Informasi Manajemen Klinik Sentosa',
    description: 'Sistem manajemen klinik terpadu (Multi-Role) mencakup: Dashboard Dokter (Diagnosa & Resep Digital), Farmasi (Stok & Verifikasi), Kasir Otomatis (Biaya Jasa + Obat), serta Dashboard Kepala Klinik untuk laporan pendapatan dan kinerja operasional.',
    tags: ['Vite (React)', 'FastAPI', 'SQLite', 'Python'],
    status: 'Completed',
    color: '#f59e0b', // Amber
    images: [require('../../assets/images/project2.jpg')]
  },
  {
    title: 'CyberShield AI',
    description: 'Chatbot cerdas pendeteksi phishing. Pengguna dapat mengirim screenshot website untuk dianalisis risikonya. Menggunakan algoritma k-NN untuk klasifikasi dan menyediakan edukasi terkait pencegahan serangan siber.',
    tags: ['Streamlit', 'k-NN', 'Machine Learning', 'Python'],
    status: 'Completed',
    color: '#ef4444', // Red
    images: [require('../../assets/images/project3.jpg')]
  },
  {
    title: 'Woundcare (WhatsApp AI Bot)',
    description: 'Asisten medis digital via WhatsApp untuk penanganan luka darurat (luka bakar, lecet, gigitan hewan, dll). Mengintegrasikan Gemini API dengan Fonnte sebagai gateway WhatsApp dan PHP sebagai backend controller.',
    tags: ['WhatsApp API', 'Gemini API', 'Fonnte', 'PHP'],
    status: 'Active',
    color: '#10b981', // Green
    images: [require('../../assets/images/project4.jpg')]
  }
];

const certificates = [
  { 
    title: 'Fundamentals of Machine Learning and Artificial Intelligence', 
    issuer: 'AWS', 
    date: '2025', 
    image: require('../../assets/images/sertif1.webp') 
  },
  { 
    title: 'Intro to Data Analytics', 
    issuer: 'RevoU', 
    date: '2025', 
    image: require('../../assets/images/sertif2.webp') 
  },
  { 
    title: 'Introduction to Front End Development', 
    issuer: 'Simplilearn (SkillUp)', 
    date: '2025', 
    image: require('../../assets/images/sertif3.webp') 
  },
  { 
    title: 'LLM-Based Tools and Gemini API Integration for Data Scientists', 
    issuer: 'Hacktiv8', 
    date: '2025', 
    image: require('../../assets/images/sertif4.webp') 
  },
  { 
    title: 'AWS Foundations: Machine Learning Basics', 
    issuer: 'AWS', 
    date: '2025', 
    image: require('../../assets/images/sertif5.webp') 
  },
  { 
    title: 'Machine Learning Using Python', 
    issuer: 'Simplilearn (SkillUp)', 
    date: '2025', 
    image: require('../../assets/images/sertif6.webp') 
  },
  { 
    title: 'Python for Beginners', 
    issuer: 'Simplilearn (SkillUp)', 
    date: '2025', 
    image: require('../../assets/images/sertif7.webp') 
  },
  { 
    title: 'Transformer Models and BERT Model', 
    issuer: 'Simplilearn (SkillUp)', 
    date: '2025', 
    image: require('../../assets/images/sertif8.webp') 
  },
];

const skillGroups = [
  {
    name: 'AI & Machine Learning',
    icon: 'brain-outline',
    skills: ['Gemini API', 'k-NN Algorithm', 'LLM', 'Machine Learning', 'Transformers']
  },
  {
    name: 'Frontend & Integrations',
    icon: 'code-slash-outline',
    skills: ['React Native', 'ReactJS (Vite)', 'Streamlit', 'WhatsApp API', 'Fonnte']
  },
  {
    name: 'Backend & Database',
    icon: 'server-outline',
    skills: ['Python', 'FastAPI', 'PHP', 'Supabase', 'SQLite']
  },
  {
    name: 'Data & Cloud Tools',
    icon: 'cloud-outline',
    skills: ['Data Analytics', 'AWS', 'Git', 'Visual Studio Code']
  }
];

const sections = [
  { title: 'Featured Projects', data: projects, type: 'project', icon: 'code-working', color: '#ef4444' },
  { title: 'Achievement & Certifications', data: certificates, type: 'certificate', icon: 'ribbon', color: '#f59e0b' },
  { title: 'Technical Skills', data: skillGroups, type: 'skill', icon: 'construct-outline', color: '#3b82f6' },
];

export default function Experience() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImagePress = useCallback((imageSource: any) => {
    setSelectedImage(imageSource);
    setModalVisible(true);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderItem = useCallback(({ item, section }: { item: any, section: any }) => {
    if (section.type === 'project') {
      return (
        <View style={[styles.projectCard, { borderTopColor: item.color }]}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>{item.title}</Text>
          </View>
          
          <Text style={styles.projectDescription}>{item.description}</Text>
          
          <Pressable 
            onPress={() => handleImagePress(item.images[0])}
            style={({ pressed }) => [
              styles.projectImageContainer,
              { width: '100%', marginBottom: 16 },
              pressed && { opacity: 0.9 }
            ]}
          >
            <Image 
              source={item.images[0]} 
              style={styles.projectImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
            <View style={styles.imageOverlay}>
              <Ionicons name="expand" size={20} color="#fff" />
            </View>
          </Pressable>

          <View style={styles.projectTags}>
            {item.tags.map((tag: string, tIndex: number) => (
              <View key={tIndex} style={styles.tagChip}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    } 
    
    if (section.type === 'certificate') {
      return (
        <Pressable 
          style={({ pressed }) => [
            styles.certCard,
            pressed && styles.certPressed
          ]}
          onPress={() => handleImagePress(item.image)}
        >
          <Image 
            source={item.image} 
            style={styles.certImage}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
          
          <View style={styles.certContent}>
            <Text style={styles.certTitle} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.certIssuer}>{item.issuer}</Text>
            <Text style={styles.certDate}>{item.date}</Text>
          </View>

          <Ionicons name="expand-outline" size={20} color="#cbd5e1" />
        </Pressable>
      );
    }

    if (section.type === 'skill') {
      return (
        <View style={styles.skillGroup}>
          <View style={styles.groupHeader}>
            <Ionicons name={item.icon as any} size={18} color="#64748b" />
            <Text style={styles.groupName}>{item.name}</Text>
          </View>
          <View style={styles.chipContainer}>
            {item.skills.map((skill: string, sIndex: number) => (
              <View key={`${skill}-${sIndex}`} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return null;
  }, [handleImagePress]);

  const renderSectionHeader = ({ section: { title, icon, color } }: any) => (
    <View style={styles.sectionHeader}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <>
      <SectionList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        sections={sections}
        keyExtractor={(item, index) => {
          const id = item.title || item.name || index.toString();
          return `${id}-${index}`;
        }}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={<Text style={styles.headerTitle}>Experience & Skills</Text>}
        stickySectionHeadersEnabled={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews={true}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalBackground} onPress={closeModal} />
          
          <View style={styles.modalContent}>
            {selectedImage && (
              <Image 
                source={selectedImage} 
                style={styles.fullImage} 
                contentFit="contain"
                transition={500}
              />
            )}
            
            <Pressable style={styles.closeButton} onPress={closeModal}>
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
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24, // Adjusted for list spacing
    marginBottom: 16,
    gap: 8,
    backgroundColor: '#f8fafc', // Ensure background covers scrolling items if sticky
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    letterSpacing: 0.5,
  },
  // Projects Styling
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16, // Added margin bottom for list items
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderTopWidth: 4,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  projectImageContainer: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e2e8f0', // Placeholder color if image fails
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 8,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagChip: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tagText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
  },
  
  // Certificate Styling
  certCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12, // Added margin bottom
    alignItems: 'center',
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  certPressed: {
    backgroundColor: '#f8fafc',
    transform: [{ scale: 0.98 }],
  },
  certImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  certContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  certTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    lineHeight: 20,
  },
  certIssuer: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
    marginTop: 2,
  },
  certDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  // Skills Styling
  skillGroup: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 16, // Added margin bottom
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  groupName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  skillText: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '500',
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
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
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
