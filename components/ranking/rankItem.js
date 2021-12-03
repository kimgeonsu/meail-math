import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

function RankItem({ prop }) {

    return (
        <View style={styles.container}>
            <Text style={styles.grade}>{prop.index}등</Text>
                <View >
                    <Text style={styles.name}>{prop.name}</Text>
                    <Text style={styles.year}>{prop.year}</Text>
                </View>
            <Text style={styles.time}>{prop.totalTime}</Text>
        </View>
    );
}

export default RankItem;

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    rank: {
        flex: 1
    },
    name: {
        flex: 1
    },
    year: {
        flex: 1
    },
    time: {
        flex: 2
    }
})