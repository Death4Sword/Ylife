import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/signup', {
        email: email,
        password: password,
      });
      console.log('Response from server:', response.data);
      // Vous pouvez ajouter d'autres logiques ici, comme la redirection vers une autre page après l'inscription réussie
    } catch (error) {
      console.error('Error registering:', error);
      // Gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
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
