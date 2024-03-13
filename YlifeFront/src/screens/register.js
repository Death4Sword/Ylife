import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import "./src/css/app.css"


function App() {
  const [Filiere, setFiliere] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.get(`/mail/${mail}`);
      const emailExists = response.data.exists;
      if (emailExists) {
        console.log('Email already exists');
        // Add logic here to handle case when email already exists
      } else {
        console.log('Email does not exist');
        // Add signup logic here if email does not exist
      }
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Nom</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer votre Nom'
          onChangeText={text => setNom(text)}
          value={nom}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Prenom</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer votre Prenom'
          onChangeText={text => setPrenom(text)}
          value={prenom}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Filière</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer votre filière'
          onChangeText={text => setFiliere(text)}
          value={Filiere}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={text => setEmail(text)}
          value={mail}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    // Add any additional styles here
  },
  sectionContainer: {
    marginBottom: 16,
    width: '100%',
    // Add any additional styles here
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    // Add any additional styles here
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    // Add any additional styles here
  },
});

export default App;