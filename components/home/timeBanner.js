import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { member } from '../../service/api';

function TimeBanner() {
    const [myTime, setMyTime] = useState();

    useFocusEffect(
        React.useCallback(() => {
            getTime();
            return () => {
                console.log("not focus");
            }
        }, [])
    )

    useEffect(() => {
        getTime();
    }, [])

    const getTime = async() => {
        try {
            let res = await member.me();
            console.log("time : ", res.data);
            setMyTime(res.data);
        } catch(e) {
            console.log("error", e);
        }
    }

    return (
        <View style={styles.banner}>
            <Text style={styles.title}>지금까지 공부한 시간</Text>
            {myTime && <Text style={styles.time}>{timeConverter(myTime.time)}</Text>}
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