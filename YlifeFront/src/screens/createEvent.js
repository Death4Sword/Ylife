import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from "react-native-gesture-handler";


const CreateEvent = ({onSelect}) => {
    const navigation = useNavigation();

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = option => {
        setSelectedOption(option);
        onSelect(option);
    };

    const handleCreateEvent = () => {
        navigation.navigate('spaceCreator');
    };

    return (
        <ScrollView>
            <View style={styles.Createcontainer}>
                <Text>Créer un évènement</Text>
                <View style={styles.CreateEvent}>
                    <Text style={styles.CreateEventTitle}>Titre de l'évènement</Text>
                    <TextInput style={styles.CreateEventInput} placeholder="Titre de l'évènement" />
                    <Text style={styles.CreateEventDescription}>Description de l'évènement</Text>
                    <TextInput style={styles.CreateEventInput} placeholder="Description de l'évènement" />
                    <Text style={styles.CreateEventLocation}>Lieu de l'évènement</Text>
                    <TextInput style={styles.CreateEventInput} placeholder="Lieu de l'évènement" />
                    <Text>Nombre de places</Text>
                    <TextInput style={styles.CreateEventInput} placeholder="Nombre de places" />
                    <Text style={styles.CreateEventDate}>Date de l'évènement</Text>
                    <TextInput style={styles.CreateEventInput} placeholder="Date de l'évènement" />
                    <Text>L'évènement est-il payant</Text>
                    {/* bouton radio de sélection si sélectionner oui alors affiche un textinput */}
                    <View style={styles.radioButtonContainer}>
                    <TouchableOpacity
                    style={[
                        styles.radioButton,
                        { backgroundColor: selectedOption === 'Oui' ? '#007BFF' : '#fff' },
                    ]}
                    onPress={() => handleSelectOption('Oui')}
                    >
                    <Text style={{ color: selectedOption === 'Oui' ? '#fff' : '#000' }}>Oui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[
                        styles.radioButton,
                        { backgroundColor: selectedOption === 'Non' ? '#007BFF' : '#fff' },
                    ]}
                    onPress={() => handleSelectOption('Non')}
                    >
                    <Text style={{ color: selectedOption === 'Non' ? '#fff' : '#000' }}>Non</Text>
                    </TouchableOpacity>
                    </View>
                        {selectedOption === 'Oui' && (
                        <TextInput
                        placeholder="Montant"
                        style={styles.input}
                        />
                    )}
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={handleCreateEvent}>
                    <Text style={styles.buttonText}>Soumettre et confirmer</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    Createcontainer: {
        flex: 1,
        padding: 20,
    },
    CreateEvent: {
        padding: 20,
        flexGrow: 1,
    },
    CreateEventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    CreateEventDescription: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    CreateEventLocation: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    CreateEventDate: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    CreateEventInput: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    radioButton: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007BFF',
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
});


export default CreateEvent;