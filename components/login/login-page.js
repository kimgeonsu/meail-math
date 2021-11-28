import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function LoginPage({navigation}) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const InputId = (input) => {
        setId(input);
    }
    const InputPw = (input) => {
        setPw(input);
    }

    const onLogin = () => {
        console.log(id);
        console.log(pw);
    }
    
    return (
        <View>
            <Text style={styles.title}>매수</Text>
            <TextInput
                style={styles.input}
                placeholder="ID"
                onChangeText={InputId}
                value={id}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={InputPw}
                value={pw}
            />

            <TouchableOpacity activeOpacity={0.8} style={styles.btnLogin} onPress={onLogin} >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity> 

            <Text 
                style={styles.register}
                onPress={() => navigation.navigate('home')}
            >회원가입</Text>   
        </View>
    );
}

const styles = StyleSheet.create({
    title : {
        color: '#207bd8',
        fontSize: '20',
        fontWeight: 'bolder',
        textAlign: 'center',
        marginBottom: 30
    },
    input : {
        border: '1px solid #ddd',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    btnLogin : {
        backgroundColor: '#207bd8',
        marginTop: 30,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10 
    },
    loginText : {
        color: '#fff',
    },
    register : {
        textAlign: 'center',
        marginTop: 10,
        color: '#aaa',
        fontSize: 12,
    }
})

export default LoginPage;