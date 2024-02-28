import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchEmail = async () => {
            try{
                const response = await fetch(`http://localhost:3000/users/mail/${email}`);
                if (!response.ok)
                {
                    throw new Error('Error fetching email');
                }
                const data = await response.json();
                console.log(data);
                setEmail(data);
            }catch (error){
                console.error('Error fetching email:', error);
            }
        };
        fetchEmail();
    },[]);

// function App() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');



//     const checkEmailExists = async () => {
//         try {
//             const response = await fetch(`http://localhost:3000/users/mail/${email}`);
//             console.log(response);
//             const data = await response.json();
//             console.log(data);
//             console.log('Mon email existe');
//         } catch (error) {
//             console.error('Error fetching email:', error);
//         }
//     };

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
            <Button title="Register" onPress={checkEmailExists} />
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
