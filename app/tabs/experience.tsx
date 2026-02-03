import { View, Text, StyleSheet, ScrollView, Pressable, Image, Modal, Linking } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Experience() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const projects = [
    {
      title: 'AI Personal Assistant App',
      description: 'Aplikasi mobile cerdas yang menggunakan Gemini API untuk membantu tugas sehari-hari.',
      tags: ['React Native', 'Gemini API', 'TypeScript'],
      status: 'Completed',
      color: '#8b5cf6' // Purple
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Dashboard interaktif untuk visualisasi data penjualan menggunakan Python dan Streamlit.',
      tags: ['Python', 'Data Science', 'Streamlit'],
      status: 'In Progress',
      color: '#10b981' // Green
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
      name: 'Artificial Intelligence',
      icon: 'brain-outline',
      skills: ['Machine Learning', 'LLM', 'Gemini API', 'BERT', 'Transformers']
    },
    {
      name: 'Data Science',
      icon: 'stats-chart-outline',
      skills: ['Python', 'Data Analytics', 'Data Visualization']
    },
    {
      name: 'Development',
      icon: 'code-slash-outline',
      skills: ['Front-end', 'React Native', 'JavaScript']
    },
    {
      name: 'Cloud & Tools',
      icon: 'cloud-outline',
      skills: ['AWS Foundations', 'Git', 'Machine Learning Basics']
    }
  ];

  const handleImagePress = (imageSource: any) => {
    setSelectedImage(imageSource);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerTitle}>Experience & Skills</Text>

        {/* Featured Projects Section (Moved to Top) */}
        <View style={styles.sectionHeader}>
          <Ionicons name="code-working" size={24} color="#ef4444" />
          <Text style={styles.sectionHeaderText}>Featured Projects</Text>
        </View>

        <View style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <View key={index} style={[styles.projectCard, { borderTopColor: project.color }]}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <View style={[styles.statusBadge, { backgroundColor: project.color + '20' }]}>
                  <Text style={[styles.statusText, { color: project.color }]}>{project.status}</Text>
                </View>
              </View>
              
              <Text style={styles.projectDescription}>{project.description}</Text>
              
              <View style={styles.projectTags}>
                {project.tags.map((tag, tIndex) => (
                  <View key={tIndex} style={styles.tagChip}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Optional: Add a button or link icon here later */}
            </View>
          ))}
        </View>

        {/* Certifications Section */}
        <View style={[styles.sectionHeader, { marginTop: 32 }]}>
          <Ionicons name="ribbon" size={24} color="#f59e0b" />
          <Text style={styles.sectionHeaderText}>Achievement & Certifications</Text>
        </View>

        <View style={styles.certGrid}>
          {certificates.map((cert, index) => (
            <Pressable 
              key={index} 
              style={({ pressed }) => [
                styles.certCard,
                pressed && styles.certPressed
              ]}
              onPress={() => handleImagePress(cert.image)}
            >
              <Image 
                source={cert.image} 
                style={styles.certImage}
                resizeMode="cover"
              />
              
              <View style={styles.certContent}>
                <Text style={styles.certTitle} numberOfLines={2}>{cert.title}</Text>
                <Text style={styles.certIssuer}>{cert.issuer}</Text>
                <Text style={styles.certDate}>{cert.date}</Text>
              </View>

              <Ionicons name="expand-outline" size={20} color="#cbd5e1" />
            </Pressable>
          ))}
        </View>

        {/* Skills Section */}
        <View style={[styles.sectionHeader, { marginTop: 32 }]}>
          <Ionicons name="construct-outline" size={24} color="#3b82f6" />
          <Text style={styles.sectionHeaderText}>Technical Skills</Text>
        </View>

        <View style={styles.skillsContainer}>
          {skillGroups.map((group, gIndex) => (
            <View key={gIndex} style={styles.skillGroup}>
              <View style={styles.groupHeader}>
                <Ionicons name={group.icon as any} size={18} color="#64748b" />
                <Text style={styles.groupName}>{group.name}</Text>
              </View>
              <View style={styles.chipContainer}>
                {group.skills.map((skill, sIndex) => (
                  <View key={sIndex} style={styles.skillChip}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Full Screen Image Modal */}
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
                resizeMode="contain"
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
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    letterSpacing: 0.5,
  },
  // Projects Styling
  projectsContainer: {
    marginBottom: 8,
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
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
  certGrid: {
    gap: 16,
  },
  certCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
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
  skillsContainer: {
    gap: 20,
  },
  skillGroup: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
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
