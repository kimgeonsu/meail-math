import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

function RoomPage({ route }) {
    const { roomId } = route.params;
    const { count, start, stop, reset } = useCounter(0, 1000);

    let min = Math.floor(count / 60);
    let hour = Math.floor(min / 60);

    

    return (
        <View>
            <Text>방 제목: 뭐시기뭐시기</Text>
            <Text>이런이런 과목을 공부해요</Text>
            <View>
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
            <View>
                <Text>한줄 소개가 여기에 주루루루룩 들어갈거구요</Text>
            </View>
            <View>
                <Text>🐣</Text>
            </View>
        </View>
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
    time : {
        fontSize : '50',
        color : 'tomato',
        textAlign : 'center'
    }
})

export default RoomPage;
