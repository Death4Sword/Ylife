import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown-v2';
import style from "../css/RegisterCSS"
import { Dropdown } from 'react-native-material-dropdown-v2'

const data = [
  { value: 'Oui' },
  { value: 'Non' },
];
const dataCreator = [
  { value: 'BDE' },
  { value: 'BDS' },
  { value: 'BDD' },
  { value: 'Pepyte' },
  { value: 'Ydays' },
];

function App() {
  // Creation of student
  const [filiere, setFiliere] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEventCreator, setIsEventCreator] = useState(false);

  // Selection of event creator
  const [selectedCreatorType, setSelectedCreatorType] = useState('');

  const handleEventCreatorSelection = (value) => {
    setIsEventCreator(value === 'Oui');
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/register`, {
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
          selectedCreatorType: selectedCreatorType
        }),
    });
    if (!response.ok) {
      throw new Error('Network was not ok');
    }
    const data = await response.json();
    console.log(data,"User registered succesfully!");
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Nom</Text>
        <TextInput
          style={style.input}
          placeholder='Entrer votre Nom'
          onChangeText={text => setNom(text)}
          value={nom}
        />
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Prenom</Text>
        <TextInput
          style={style.input}
          placeholder='Entrer votre Prenom'
          onChangeText={text => setPrenom(text)}
          value={prenom}
        />
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Filière</Text>
        <TextInput
          style={style.input}
          placeholder='Entrer votre filière'
          onChangeText={text => setFiliere(text)}
          value={filiere}
        />
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Email</Text>
        <TextInput
          style={style.input}
          placeholder="Enter your email"
          onChangeText={text => setEmail(text)}
          value={mail}
        />
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Password</Text>
        <TextInput
          style={style.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      {/* choose if person is eventCreator */}
      <View style={style.sectionContainer}>
        <Text style={style.sectionTitle}>Etes-vous un créateur d'événement ?</Text>
        <Dropdown
          label='Oui/Non'
          data={data}
          onChangeText={handleEventCreatorSelection}
        />
        {isEventCreator && (
            <Dropdown
            label= 'Quel type de créateur êtes-vous?'
            data={dataCreator}
            typeAsso={selectedCreatorType}
            onChangeText={(typeAsso) => setSelectedCreatorType(typeAsso)}
          />
        )}
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

export default App;