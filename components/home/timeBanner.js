import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { timer } from '../../service/api';

function TimeBanner({ prop }) {
    const [myTime, setMyTime] = useState();

    useEffect(() => {
        getTime();
    }, [])

    const getTime = async() => {
        try {
            let res = await timer.allTime(prop.name);
            console.log("time : ", res.data);

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.banner}>
            <Text style={styles.title}>지금까지 공부한 시간</Text>
            <Text style={styles.time}>00:00:00</Text>
        </View>
    );
}

function timeConverter(data) {
    let min = Math.floor(data / 60);
    let hour = Math.floor(min / 60);

    return (hour < 10 ? '0'+ hour : hour) + ":" + (min % 60 < 10 ? '0'+(min%60) : (min%60)) + ":" + (data % 60 < 10 ? '0'+(data % 60): (data%60));
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