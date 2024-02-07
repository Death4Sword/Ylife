// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// export default App;


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import RegisterScreen from './Screens/Register';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajouter la logique de connexion ici
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Ajouter la logique de register
    console.log('Register:');
  };

  return (
    // TODO: savoir pourquoi une ouverture de brackets doit être faite voir ligne du dessous
    <><View style={styles.mainApp}>
      <Text style={styles.sectionTitle}>Y'LIFE</Text>
    </View><View style={styles.mainContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={text => setEmail(text)}
            value={email} />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password} />
        </View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen  name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Button title="Login" onPress={handleLogin} />
        
      </View></>
  );
}

const styles = StyleSheet.create({
  mainApp: {
    // flex : 1,
    paddingTop: 150,
    justifyContent:  'center',
    alignItems: 'center',
  },
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

