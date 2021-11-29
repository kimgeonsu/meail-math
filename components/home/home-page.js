import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

import Card from './card';


function HomePage() {
    const rooms = [];

    return (
        <View>
            <Text>홈 페이지입니다.</Text>
            <View style={styles.context}>
                <Text style={styles.title}>오늘의 공부시간</Text>
                <Text style={styles.time}>12:12:12</Text>
            </View>

            <View style={styles.context}>
                <Text style={styles.title}>나의 스터디룸</Text>
                {rooms.map(room => (
                    <Card prop={room} key={room.id} />
                ))}
            </View>

            <View style={styles.context}>
                <Text style={styles.title}>열려 있는 스터디룸</Text>
                {rooms.map(room => (
                    <Card prop={room} key={room.id} />
                ))}
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.btnMakeRoom}>
                <Text>방 만들기</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    context: {

    },

    card: {

    },

    title: {

    },

    time: {

    },

    btnMakeRoom: {

    }
})