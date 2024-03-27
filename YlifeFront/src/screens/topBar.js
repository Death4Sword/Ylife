import React from "react";
import { View, Text } from "react-native";
import style from "../css/topBarCSS";
import Icon from 'react-native-vector-icons/FontAwesome';


function topBar(){
    <View style={style.topBar}>
        <Text style={style.topBarText}>YLife
            <Icon name="bell" size={20} color="black"></Icon>
        </Text>
    </View>
}

export default topBar;