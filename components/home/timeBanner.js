import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TimeBanner() {

    return (
        <View style={styles.banner}>
            <Text style={styles.title}>지금까지 공부한 시간</Text>
            <Text style={styles.time}>00:00:00</Text>
        </View>
    );
}

export default TimeBanner;

const styles = StyleSheet.create({
    banner: {
        borderRadius: 15,
        backgroundColor: '#1ae5e2',
        padding: 10,
        margin: 10,
    },
    title: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    time: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center'
    }
})