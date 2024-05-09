import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const ViewEvent = () => {
    const navigation = useNavigation();
    const creator = 'BDE';
    const [events, setEvents] = useState([
        {
        id: 1,
        date: '15 Mars 2023',
        title: 'Soirée des diplômés',
        description: 'En attendant le WED, le BDE invite à une soirée sur une péniche où nous nous occupons de tout !',
        creator: 'BDE',
        },
        {
        id: 2,
        date: '16 Mars 2023',
        title: 'LoL Ynov Cup',
        description: 'Venez participer à la nouvelle édition de la LoL Ynov Cup. Un tournoi organisé par le BDS Esp...',
        creator: 'BDS',
        },
        {
        id: 3,
        date: '23 Mars 2023',
        title: 'Olympiades',
        description: 'Participez à une journée sportive avec les olympiades !',
        creator: 'BDS',
        },
        {
        id: 4,
        date: '15 Mars 2023',
        title: 'Soirée des diplômés',
        description: 'En attendant le WED, le BDE invite à une soirée sur une péniche où nous nous occupons de tout !',
        creator: 'BDE',
        },
        {
        id: 5,
        date: '16 Mars 2023',
        title: 'LoL Ynov Cup',
        description: 'Venez participer à la nouvelle édition de la LoL Ynov Cup. Un tournoi organisé par le BDS Esp...',
        creator: 'BDS',
        },
    ]);

    const handleSpaceStudent = () => {
        navigation.navigate('spaceStudent');
    };

    const handleSpaceCreator = () => {
        navigation.navigate('spaceCreator');
    };

    const handleCreateEvent = () => {
        navigation.navigate('CreateEvent');
    };
    
    return (
        <ScrollView>
            {creator != 'Etudiant' ? (
                <View style={styles.creatorContainer}>
                    <Text>Evenement</Text>
                <View style={styles.gestionEventStudent}>
                    <TouchableOpacity onPress={handleSpaceStudent}>
                    <Text>Espace Etudiant</Text>
                    <Text>Gérer mes inscription, favoris...</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gestionEventCreator}>
                    <TouchableOpacity onPress={handleSpaceCreator}>
                    <Text>Espace Créateur</Text>
                    <Text>Gérer et suivre mes demandes d'événement...</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonCreateEvent} onPress={handleCreateEvent}>
                    <Text>Soumettre un événement</Text>
                </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>Soirée des diplômés</Text>
                    <Text style={styles.eventDate}>15 Mars 2023</Text>
                    <Text style={styles.eventLocation}>Péniche</Text>
                    <Text style={styles.eventPrice}>Gratuit</Text>
                    <Text style={styles.eventContact}>Contact : BDE</Text>
                    <Text style={styles.eventDescription}></Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 18,
    },
    eventLocation: {
        fontSize: 18,
    },
    eventPrice: {
        fontSize: 18,
    },
    eventContact: {
        fontSize: 18,
    },
    eventDescription: {
        fontSize: 18,
    },
});

export default ViewEvent;