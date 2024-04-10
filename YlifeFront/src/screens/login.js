import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Initialiser la navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fonction pour gérer la connexion
  const handleLogin = () => {
    // Vérifier si l'utilisateur existe dans la base de données
    // Comparer le mot de passe fourni avec celui stocké en base de données
    // Gérer les cas de succès ou d'échec de connexion
    // Ceci est juste un exemple simplifié
    if (email === 'exemple@mail.com' && password === 'motdepasse') {
      // Connexion réussie, rediriger vers la page d'accueil
      navigation.navigate('Home'); // Redirection vers la page Home
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Redirection vers la page register
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.createAccount}>Créer un compte</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 10,
  },
  createAccount: {
    fontSize: 14,
    color: '#007BFF',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
