import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function StudyGraph() {

    return (
        <View style={styles.container}>
            <Text style={styles.notice}>공사중</Text>
        </View>
    );
}

export default StudyGraph;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#afddec',
        borderRadius: 15,
        height: 200,
        margin: 10
    },
    notice: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
})