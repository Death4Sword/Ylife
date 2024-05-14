import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventDetailScreen = ({ route, navigation }) => {
  // TODO: Récupérer les informations de l'événement depuis la route et faire le back
    const title = 'Soirée des diplômés';
    const date = '15 Mars 2023';
    const time = '20h00';
    const location = 'Péniche Le Marcounet, Paris';
    const price = 'Gratuit';
    const contact = 'gregory@gmail.com';
    const description = 'En attendant le WED, le BDE invite à une soirée sur une péniche où nous nous occupons de tout !';
    const tags = ['Soirée', 'BDE', 'Péniche', 'Gratuit'];
    const photos = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
    ];
    const creator = 'BDE';

  // Fonction pour rediriger vers la page d'inscription
  const handleInscription = () => {
    // Ajoutez votre code pour naviguer vers la page d'inscription
    console.log('Inscription à l\'événement');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image de fond */}
        <ImageBackground source={{ uri: photos[0] }} style={styles.backgroundImage}>
          {/* En-tête de la page */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={30} color="#007BFF" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            {/* Contenu de l'événement */}
            <View style={styles.eventInfo}>
                <Text style={styles.eventDate}>{date} - {time}</Text>
                <Text style={styles.eventLocation}>{location}</Text>
                <Text style={styles.eventPrice}>{price}</Text>
                <Text style={styles.eventContact}>{contact}</Text>
                <Text style={styles.eventDescription}>{description}</Text>
                {/* Affichage des tags */}
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <Text key={index} style={styles.tag}>{tag}</Text>
                    ))}
                </View>
            </View>
            <TouchableOpacity>
              <Icon name="share" size={30} color="#007BFF" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.photosContainer}>
          {photos.map((photo, index) => (
            <Image key={index} source={{ uri: photo }} style={styles.photo} />
          ))}
        </View>

        {/* Bouton d'inscription */}
        <TouchableOpacity style={styles.registerButton} onPress={handleInscription}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventInfo: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  eventDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventLocation: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventContact: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#007BFF',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default EventDetailScreen;
