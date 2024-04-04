import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { CheckBox } from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import style from "../css/EventCSS";

const dataFiltre = [
    { label: 'BDE', value: 'BDE' },
    { label: 'BDS', value: 'BDS' },
    { label: 'BDD', value: 'BDD' },
    { label: 'PEPYTE', value: 'PEPYTE' },
    { label: 'Option avec Checkbox', value: 'optionCheckbox', checkBox: true },
];

const App = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [filters, setFilters] = useState({ filter1: false, filter2: false });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePress = () => {
        console.log("Event clicked");
    };

    const handleFilterPress = () => {
        setModalVisible(true);
    };

    const handleApplyFilters = () => {
        console.log('Filtres appliqués :', filters);
        setModalVisible(false);
    };

  // Fonction pour déconnecter l'utilisateur
  const handleLogout = () => {
    // Ici, vous pouvez implémenter la logique de déconnexion, par exemple, réinitialiser les états d'email et de mot de passe
    setEmail('');
    setPassword('');
    setError('');
    // Rediriger l'utilisateur vers la page de connexion
    navigation.navigate('Login'); // Redirection vers la page Login
  };

  // Définir le bouton de déconnexion dans l'en-tête de navigation
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
          <Text style={style.buttonText}>Déconnexion</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

    return (
        <View style={style.mainContainer}>
            <View style={style.sectionHomeContainer}>
                <Text style={style.sectionTitle}>Accueil
                    <TouchableOpacity style={style.filterButton} onPress={handleFilterPress}>
                        <Icon name="filter" size={20} color="black" />
                        <Text style={style.filterButtonText}>Filtre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                        <Text style={style.logoutButtonText}>Déconnexion</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={style.listeEventContainer}>
                <View style={style.sectionEventContainer} onPress={handlePress}>
                    <Text style={style.sectionDate}>15 mars 2023 {/*TODO value du back*/}
                        <Text style={style.sectionCreator}>icon BDE {/*TODO value du back*/}</Text>
                        <Icon name="share" size={20} color="black" />
                        <Icon name="heart" size={20} color="black" />
                    </Text>
                    <Text style={style.sectionTitleEvent}>Soirée des Diplômés {/*TODO value du back*/}</Text>
                    <Text style={style.sectiondescriptionEvent}>Soirée des Diplômés venez avant le WED... {/*TODO value du back + mettre 3 petits points si ça dépasse 2 lignes*/}</Text>
                </View>
            </View>
        </View>
    );
};

export default App;
