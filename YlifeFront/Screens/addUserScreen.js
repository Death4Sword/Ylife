import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUserScreen = () => {
    const [mail, setMail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [classeEcole, setClasseEcole] = useState('');
    const [createurEvenement, setCreateurEvenement] = useState('');

    const handleAjouterUtilisateur = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/utilisateurs', {
                mail,
                motDePasse,
                nom,
                prenom,
                telephone,
                classeEcole,
                createurEvenement,
        });

            console.log('Utilisateur ajouté avec succès:', response.data);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur:', error.message);
        }
    };

    return (
            <View style={styles.container}>
            <Text>Ajouter un utilisateur</Text>
            <TextInput placeholder="Mail" value={mail} onChangeText={setMail} style={styles.input} />
            <TextInput placeholder="Mot de passe" value={motDePasse} onChangeText={setMotDePasse} style={styles.input} secureTextEntry />
            <TextInput placeholder="Nom" value={nom} onChangeText={setNom} style={styles.input} />
            <TextInput placeholder="Prénom" value={prenom} onChangeText={setPrenom} style={styles.input} />
            <TextInput placeholder="Téléphone" value={telephone} onChangeText={setTelephone} style={styles.input} />
            <TextInput placeholder="Classe d'école" value={classeEcole} onChangeText={setClasseEcole} style={styles.input} />
            <TextInput placeholder="Créateur d'événement" value={createurEvenement} onChangeText={setCreateurEvenement} style={styles.input} />

            <Button title="Ajouter Utilisateur" onPress={handleAjouterUtilisateur} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
        width: '100%',
    },
});

export default AddUserScreen;
