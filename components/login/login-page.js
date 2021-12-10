import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { member } from '../../service/api';

function LoginPage({navigation}) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const InputId = (input) => {
        setId(input);
    }
    const InputPw = (input) => {
        setPw(input);
    }

    const onLogin = async() => {
        try {
            let res = await member.login(id, pw);
            console.log(navigation);
            navigation.navigate('homeTab');
            console.log(res);
            if (res) {
                await AsyncStorage.setItem('userInfo', JSON.stringify(res));
            } else {
                console.log("다시");
            }
        } catch(e) {
            console.log(e);
        }
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>👩🏻‍🚀</Text>
            <TextInput
                style={styles.input}
                placeholder="ID"
                onChangeText={InputId}
                value={id}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="password"
                onChangeText={InputPw}
                value={pw}
            />

            <TouchableOpacity activeOpacity={0.8} style={styles.btnLogin} onPress={() => {navigation.navigate('homeTab')}}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity> 

            <Text 
                style={styles.register}
                onPress={() => navigation.navigate('register')}
            >회원가입</Text>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    },
    title : {
        // color: '#ffc000',
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    input : {
        backgroundColor: '#ddd',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        width: '80%'
    },
    btnLogin : {
        backgroundColor: '#00cccc',
        marginTop: 30,
        borderRadius: 40,
        textAlign: 'center',
        padding: 10,
        // width: '10%'
    },
    loginText : {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    register : {
        textAlign: 'center',
        marginTop: 30,
        color: '#fff',
        fontSize: 12,
    }
})

export default LoginPage;