import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const SpaceStudent = () => {
    const navigation = useNavigation();
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

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Mon espace étudiant</Text>
                {events.map((event) => (
                    <View key={event.id} style={styles.event}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.eventDescription}>{event.description}</Text>
                        <Text style={styles.eventCreator}>Créé par {event.creator}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SpaceStudent;