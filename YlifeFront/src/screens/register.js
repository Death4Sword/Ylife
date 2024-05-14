import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

function RegisterScreen() {
  // TODO : Finaliser le register avec le password hashé en back
  // Creation of student
  const navigation = useNavigation();
  const [filiere, setFiliere] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeAsso, setTypeAsso] = useState('Etudiant');
  const [isEventCreator, setIsEventCreator] = useState('Non');

  const handleRegister = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/users/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          nom: nom, 
          prenom: prenom, 
          mail: mail,
          password: password,
          filiere: filiere,
          typeAsso: typeAsso,
        }),
    });
    if (!response.ok) {
      throw new Error('Network was not ok');
    }
    const data = await response.json();
    navigation.navigate('Login');
    console.log(data,"User registered succesfully!");
    } catch (error) {
      console.error('Error checking data:', error, data);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
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
        <Picker
          style={styles.filterIsEventCreator}
          selectedValue={filiere}
          onValueChange={(value) => setFiliere(value)}
        >
          <Picker.Item label="B1" value="B1" />
          <Picker.Item label="B2" value="B2" />
          <Picker.Item label="B3" value="B3" />
          <Picker.Item label="M1" value="M1" />
          <Picker.Item label="M2" value="M2" />
        </Picker>
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
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Etes-vous un créateur d'événement ?</Text>
        <Picker
          style={styles.filterIsEventCreator}
          selectedValue={isEventCreator}
          onValueChange={(value) => setIsEventCreator(value)}
        >
          <Picker.Item label="Non" value="Non" />
          <Picker.Item label="Oui" value="Oui" />
        </Picker>
        {isEventCreator === 'Oui' && (
          <Picker
            style={styles.filterIsEventCreator}
            selectedValue={typeAsso}
            onValueChange={(value) => setTypeAsso(value)}
          >
            <Picker.Item label="Etudiant" value="Etudiant" />
            <Picker.Item label="BDE" value="BDE" />
            <Picker.Item label="BDS" value="BDS" />
            <Picker.Item label="BDD" value="BDD" />
            <Picker.Item label="Pepyte" value="Pepyte" />
            <Picker.Item label="Ydays" value="Ydays" />
          </Picker>
        )}
      </View>
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
      flexGrow: 1,
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
  filterIsEventCreator: {
    height: 40,
    width: 120,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
});