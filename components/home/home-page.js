import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';

import Card from './card';
import CreateRoom from './createRoom'

function HomePage() {
    const [modalVisible, setModalVisible] = useState(false);
    const getData = (e) => {
        setModalVisible(e);
    }

    const rooms = [1,2,3,4];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.title}>오늘의 공부시간</Text>
                <Text style={styles.time}>12:12:12</Text>
            </View>

            <View style={styles.context}>
                <Text style={styles.title}>나의 스터디룸</Text>
                <View style={styles.cards}>
                    {rooms.map(room => (
                        <Card style={styles.card} prop={room} key={room.id} />
                    ))}
                </View>
            </View>

            <View style={styles.context}>
                <Text style={styles.title}>열려 있는 스터디룸</Text>
                <View style={styles.cards}>
                    {rooms.map(room => (
                        <Card style={styles.card} prop={room} key={room.id} />
                    ))}
                </View>
            </View>
            
            <CreateRoom prop={modalVisible} setData={getData}/>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnMakeRoom} onPress={() => {setModalVisible(true)}}>
                <Text style={styles.makeText}>방 만들기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    context: {
        backgroundColor: '#445',
        padding: 10,
        margin: 20,
        borderRadius: 20
    },
    banner: {
        backgroundColor: '#ffc000',
        borderRadius: 20,
        padding: 10
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10
    },

    time: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'center'
    },

    btnMakeRoom: {
        position: 'absolute',
        bottom: 350,
        backgroundColor: '#ffc000',
        padding: 10,
        borderRadius: 20,
        left: '50%',
        transform: [{ translateX: -25 }]
    },
    makeText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})