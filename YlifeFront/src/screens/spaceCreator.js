import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const SpaceCreator = () => {
    // TODO: Faire le back
    // TODO: Faire le front
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const handleEventCreator = async () => {
            try{
                const response = await fetch(`http://10.92.2.40:3000/events/getEventbyAccount`);
                if (!response.ok) {
                    throw new Error('Network was not ok');
                }
                const data = await response.json();
                setEvents(data);
                console.log(data, "event fetched succesfully!");
            } catch (error) {
                console.error('Error fetching event', error);
            }
        };
        handleEventCreator();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Mon espace créateur</Text>
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
        padding: 20,
    },
    event: {
        marginBottom: 20,
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    eventDescription: {
        fontSize: 16,
    },
    eventCreator: {
        fontSize: 14,
        color: 'gray',
    },
});

export default SpaceCreator;