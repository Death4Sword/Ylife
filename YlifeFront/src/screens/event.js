import React from "react";
import { View, Text, Button, Image } from "react-native";
import navBar from "./navBar";
import topBar from "./topBar";
import Icon from "react-native-vector-icons/FontAwesome";
import style from "../css/viewEventCSS";

const handleReturn = () => {
    // TODO: Faire en sorte que le bouton retour fonctionne
    console.log("Return to the previous page");
};

const handleParticipate = () => {
    console.log("Participate to the event");
}

function Event() {

    return (
        // topBar();
        <View style={style.mainEventContainer}>
            <View style={style.sectionTopEventContainer}>
                {/* TODO : rajouter la source dans image */}
                {/* <Image style={style.imageEvent} source={}/> */}
                <Button title="Retour" onPress={handleReturn}/>
                <Icon name="share" size={30} color="black"/>
                <Icon name="heart" size={30} color="black"/>
                <Text style={style.sectionTitleEvent}>Soirée des diplômé</Text>
                <Text style={style.sectionTitledate}>Date et heure
                    <Text style={style.sectionHeure}>15 Mars 2023 - 20h00</Text>
                </Text>
                <Text style={style.sectionTitleLieu}>Lieu
                    <Text style={style.sectionLieu}>Paris 1er arrondissement</Text>
                </Text>
                <Text style={style.sectionTitleTarif}>Tarif
                    <Text style={style.sectionTarif}>Gratuit</Text>
                </Text>
                <Text style={style.sectionTitleContact}>Contact
                    <Text style={style.sectionContact}>bds.paris@ynov.com</Text>
                </Text>
            </View>
            <View style={style.sectionAPropos}>
                <Text style={style.sectionTitleAPropos}>A propos de l'événement</Text>
                <Text style={style.sectionDescription}>Venez fêter la fin de vos études avec nous lors de la soirée des diplômés !</Text>
                {/* TODO: ajouter un carrouselle d'image et vidéo  */}
            </View>
            <Button title="+ S'inscrire" onPress={handleParticipate}/>
        </View>
        // navBar();
    );
}

export default Event;