import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegisterPress = async () => {
        // Vérifier si l'email est vide
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
            // Alert.alert('Error', 'Something went wrong, please try again');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Password</Text>
                <TextInput
                    style={styles.input}
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

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    sectionContainer: {
        marginBottom: 16,
        width: '100%',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
});

export default App;
