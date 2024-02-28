import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import style from "./src/css/AppCSS.js";

const App = () => { 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegisterPress = async () => {
        if (!email.trim()) {
            Alert.alert('Error', 'Please enter your email');
            return;
        }
        try {
            const response = await fetch(`http://10.0.2.2:3000/users/mail/${email}`);
            if (!response.ok) {
                throw new Error('Error fetching email');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching email:', error);
        }
    };

    return (
        <View style={style.mainContainer}>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>Email</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter your email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>Password</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>
            <Button title="Register" onPress={handleRegisterPress}/>
        </View>
    );
};

export default App;
