import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

function Card({ prop, navigation }) {
    const enterRoom = () => {
        navigation.navigate('room', {
            roomId: prop.id
        })
    }

    const participent = [1,2,3,4,5,6,7,6];

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={enterRoom}
        >
            <Text style={styles.info}>{prop.subject}</Text>
            <Text style={styles.title}>{prop.title}</Text>
            <View style={styles.profile}>{participent.map(person => <Text style={styles.emoji}>😆</Text>)}</View>
            <View style={styles.names}>{participent.map(person => <Text style={styles.name}>이름</Text>)}</View>

            <Icon name="people" style={styles.iconPeople} color={'#fff'} size={15} />
        </TouchableOpacity>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#262626',
        borderRadius: 15,
        margin: 10,
        padding: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 3
    },
    info: {
        color: '#ddd',
        fontSize: 15,
        margin: 5
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5
    },
    emoji: {
        fontSize: 25
    },
    names: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5
    },
    name: {
        fontSize: 15,
        color: '#ddd',
        width: '25%',
        margin: 5
    },
    iconPeople: {
        marginTop: 10,
        marginLeft: 10
    }
})