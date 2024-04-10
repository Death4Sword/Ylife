import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="home-outline" size={24} color="white" />
      <Text style={styles.headerText}>Accueil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008CBA',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default header;