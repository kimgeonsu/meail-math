import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Card({ prop }) {
    
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{prop.title}제목이라구</Text>
            <Text style={styles.info}>{prop.subject}과목을 적으면 보여요 </Text>
            <Text style={styles.info}>참여인원: {prop.allCount}</Text>
            <Text style={styles.info}>공부중: {prop.ing}</Text>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: '45%',
        height: 180,
        backgroundColor: '#2c2c34',
        borderRadius: 30,
        padding: 10,
        margin: 5
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
    }
})