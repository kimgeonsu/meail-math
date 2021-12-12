import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';

function RoomPage({ route }) {
    const { roomId } = route.params;
    const { count, start, stop, reset } = useCounter(0, 1000);

    let min = Math.floor(count / 60);
    let hour = Math.floor(min / 60);

    const tmp = [1,2,3,4,5,6,7,8,9];

    return (
        <SafeAreaView>
            <Text style={styles.title}>제목이 들어가는 자리에요</Text>
            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{hour} : {min % 60} : {count % 60}</Text>
                <TouchableOpacity
                    onPress={start}>
                        <Text>시작</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={stop}
                >
                        <Text>정지</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.userTable}>
                {tmp.map(user => <View style={styles.friends}>
                    <Text style={styles.profile}>👨🏿‍🚀</Text>
                    <Text style={styles.name}>이름</Text>
                    <Text style={styles.friendTime}>00:00:00</Text>
                </View>)}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnExit}>
                    <Text style={styles.textExit}>나가기</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStop} onPress={stop}>
                    <Text style={styles.textExit}>정지</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStop} onPress={start}>
                    <Text style={styles.textStop}>재개</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
    timeWrapper: {

    },
    
    time : {
        fontSize : '50',
        color : 'tomato',
        textAlign : 'center'
    },

    title: {

    },

    userTable: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5
    },

    profile: {
        fontSize: 100
    },

    friends: {
        width: '33%',
        
    },

    name: {
        textAlign: 'center'
    },

    friendTime: {

    },

    footer: {

    },

    btnStop: {

    },

    textStop: {

    },

    btnExit: {

    },

    textExit: {

    }
})

export default RoomPage;
