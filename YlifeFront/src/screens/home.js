import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
      creator: 'BDS Esp...',
    },
    {
      id: 3,
      date: '23 Mars 2023',
      title: 'Olympiades',
      description: 'Participez à une journée sportive avec les olympiades !',
      creator: 'BNS',
    },
  ]);

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setError('');
    navigation.navigate('Login');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Déconnexion</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const navigateToEventDetail = (eventId) => {
    navigation.navigate('event', { eventId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Accueil</Text>
      <View style={styles.eventContainer}>
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={styles.eventCard}
            onPress={() => navigateToEventDetail(event.id)}>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventCreator}>Créateur: {event.creator}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventContainer: {
    flex: 1,
  },
  eventCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  eventCreator: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
},
buttonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default HomeScreen;
