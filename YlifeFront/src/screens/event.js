// export default Event;
import React from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import style from "../css/viewEventCSS";

const Event = () => {
    const navigation = useNavigation();

    const handleReturn = () => {
        navigation.navigate("Home");
    };
    
    const handleParticipate = () => {
        console.log("Participate to the event");
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: null
        });
      }, [navigation]);

    return (
        <View style={style.mainEventContainer}>
            <View style={style.sectionTopEventContainer}>
                <Button title="Retour" onPress={handleReturn}/>
                <Icon name="share" size={30} color="black"/>
                <Icon name="heart" size={30} color="black"/>
                <View style={style.sectionTitleEventContainer}>
                    <Text style={style.sectionTitleEvent}>Soirée des diplômés</Text>
                    <Text style={style.sectionTitledate}>15 Mars 2023 - 20h00</Text>
                </View>
                <View style={style.sectionDivider} />
                <Text style={style.sectionTitleLieu}>Lieu</Text>
                <Text style={style.sectionLieu}>Paris 1er arrondissement</Text>
                <Text style={style.sectionTitleTarif}>Tarif</Text>
                <Text style={style.sectionTarif}>Gratuit</Text>
                <Text style={style.sectionTitleContact}>Contact</Text>
                <Text style={style.sectionContact}>bds.paris@ynov.com</Text>
            </View>
            <View style={style.sectionAPropos}>
                <Text style={style.sectionTitleAPropos}>A propos de l'événement</Text>
                <Text style={style.sectionDescription}>Venez fêter la fin de vos études avec nous lors de la soirée des diplômés !</Text>
            </View>
            <Button title="+ S'inscrire" onPress={handleParticipate}/>
        </View>
    );
}

export default Event;
