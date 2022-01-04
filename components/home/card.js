import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

function Card({ prop, navigation }) {
    const enterRoom = () => {
        navigation.navigate('room', {
            roomId: prop.id
        })
        //navigation.navigate('login');
    }

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={enterRoom}
        >
            <Text style={styles.info}>{prop.subject}</Text>
            <Text style={styles.title}>{prop.title}</Text>
            {prop.emojis && <View style={styles.profile}>{prop.emojis.map(person => <Text style={styles.emoji}>{person}</Text>)}</View>}
            {prop.names && <View style={styles.names}>{prop.names.map(person => <Text style={styles.name}>{person}</Text>)}</View>}

            <View style={styles.wrap}>
                <Icon name="people" style={styles.iconPeople} color='#fff' size={15} />
                <Text style={styles.count}>{prop.names? prop.names.length : '0'}</Text>
            </View>
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
    },
    wrap: {
        display: 'flex',
        flexDirection: 'row',
    },
    count: {
        color: '#fff',
        marginTop: 8,
        marginLeft: 5 
    }
})