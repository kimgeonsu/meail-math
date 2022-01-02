import React, { useState, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';

function RoomUser({ prop }) {
    const {count, start, stop, reset} = useCounter(prop.time, 1000);

    useEffect(() => {
        start();
    }, []);

    return (
        <View style={styles.friends}>
            <Text style={styles.name}>{prop.name}</Text>
            <Text style={styles.profile}>{prop.emoji}</Text>
            <Text style={styles.friendTime}>{timeConverter(count)}</Text>
        </View>
    )
}

function timeConverter(data) {
    let min = Math.floor(data / 60);
    let hour = Math.floor(min / 60);

    return (hour < 10 ? '0'+ hour : hour) + ":" + (min % 60 < 10 ? '0'+(min%60) : (min%60)) + ":" + (data % 60 < 10 ? '0'+(data % 60): (data%60));
}

function useCounter(initialValue, ms) {
    const [count, setCount] = useState(initialValue);
    const intervalRef = useRef(null);
    const start = useCallback(() => {
        if (intervalRef.current !== null) {
            return;
        }
        intervalRef.current = setInterval(() => {
            setCount(c => c+1);
        }, ms);
    }, []);

    const stop = useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);
    const reset = useCallback(() => {
        setCount(0);
    }, []);


    return { count, start, stop, reset };
}

const styles = StyleSheet.create({
    profile: {
        fontSize: 70,
        color: '#fff',
        textAlign: 'center'
    },

    friends: {
        width: '33%',
        marginBottom: 15
    },

    name: {
        textAlign: 'center',
        color: 'lightgray'
    },

    friendTime: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
})

export default RoomUser;