import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Background */}
      <View style={styles.headerBackground} />
      
      <View style={styles.contentContainer}>
        {/* Profile Image Area */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light' }} 
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Derill</Text>
          <Text style={styles.title}>Mobile App Developer</Text>
          <Text style={styles.bio}>
            Passionate about creating intuitive and performant mobile experiences. 
            Loves React Native and clean code.
          </Text>
        </View>

        {/* Stats / Quick Info */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2+</Text>
            <Text style={styles.statLabel}>Years Exp</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Clients</Text>
          </View>
        </View>

        {/* Action Buttons (Socials) */}
        <View style={styles.socialRow}>
          <Pressable 
            style={({ pressed }) => [
              styles.socialBtn, 
              { backgroundColor: '#171515' },
              pressed && styles.btnPressed
            ]}
          >
            <Ionicons name="logo-github" size={20} color="#fff" />
          </Pressable>
          <Pressable 
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
            {['React Native', 'TypeScript', 'JavaScript', 'UI/UX Design', 'Git', 'Rest API'].map((skill, index) => (
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
            <Text style={styles.contactText}>derill@example.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color="#64748b" />
            <Text style={styles.contactText}>+62 812 3456 7890</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="location" size={20} color="#64748b" />
            <Text style={styles.contactText}>Jakarta, Indonesia</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: 150,
    backgroundColor: '#1e293b',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -75, // Pull content up over the header
    paddingBottom: 40,
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
    color: '#64748b',
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
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  skillText: {
    color: '#0284c7',
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
});
