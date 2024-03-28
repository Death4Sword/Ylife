import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { CheckBox } from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../css/EventCSS";

const dataFiltre = [
    { label: 'BDE', value: 'BDE' },
    { label: 'BDS', value: 'BDS' },
    { label: 'BDD', value: 'BDD' },
    { label: 'PEPYTE', value: 'PEPYTE' },
    { label: 'Option avec Checkbox', value: 'optionCheckbox', checkBox: true },
];

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [filters, setFilters] = useState({ filter1: false, filter2: false });

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
    // TODO: Implementer la fonctionnalité de filtre problème avec le modal a résoudre
    // const renderFiltersModal = () => (
    //     <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={modalVisible}
    //         onRequestClose={() => setModalVisible(false)}>
    //         <View style={style.modalView}>
    //             <Text style={style.modalTitle}>Sélectionnez les filtres :</Text>
    //             {dataFiltre.map((item, index) => (
    //                 <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                     <CheckBox
    //                         value={filters[item.value]}
    //                         onValueChange={newValue => setFilters({ ...filters, [item.value]: newValue })}
    //                         style={style.checkbox}
    //                     />
    //                     <Text style={style.checkboxLabel}>{item.label}</Text>
    //                 </View>
    //             ))}
    //             <TouchableOpacity style={style.applyButton} onPress={handleApplyFilters}>
    //                 <Text style={style.applyButtonText}>Appliquer</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </Modal>
    // );

    return (
        <View style={style.mainContainer}>
            <View style={style.sectionHomeContainer}>
                <Text style={style.sectionTitle}>Accueil
                    <TouchableOpacity style={style.filterButton} onPress={handleFilterPress}>
                        <Icon name="filter" size={20} color="black" />
                        <Text style={style.filterButtonText}>Filtre</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            {/* {renderFiltersModal()} */}
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
