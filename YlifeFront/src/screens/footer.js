import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>N</Text>
      <Text style={styles.footerText}>N</Text>
      <Text style={styles.footerText}>Évènements</Text>
      <Text style={styles.footerText}>Mon compte</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#008CBA',
    padding: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default footer;