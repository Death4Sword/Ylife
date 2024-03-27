import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import style from "../css/navBarCSS";


function navBar(){
    return(
        <View style={style.navBar}>
            <Text style={style.navbarText}>Home
                <Icon name="home" size={20} color="black"></Icon>
            </Text>
            <Text style={style.navbarText}>Agenda
                <Icon name="calendar" size={20} color="black"></Icon>
            </Text>
            <Text style={style.navbarText}>Evènements
                <Icon name="star" size={20} color="black"></Icon>
            </Text>
            <Text style={style.navbarText}>Mon compte
                <Icon name="account" size={20} color="black"></Icon>
            </Text>
        </View>
    );
}

export default navBar;