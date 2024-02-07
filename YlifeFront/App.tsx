import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.get(`/mail/${email}`);
      const emailExists = response.data.exists;
      if (emailExists) {
        console.log('Email already exists');
        // Ajoutez ici la logique pour gérer le cas où l'email existe déjà
      } else {
        console.log('Email does not exist');
        // Ajoutez ici la logique d'inscription si l'email n'existe pas
      }
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={text => setEmail(text)}
          value={email}
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
  },
  sectionContainer: {
    marginBottom: 16,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default App;
