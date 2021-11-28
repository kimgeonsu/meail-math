import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

function HomePage() {
    const { count, start, stop, reset } = useCounter(0, 1000);

    let min = Math.floor(count / 60);
    let hour = Math.floor(min / 60);
    return (
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

export default HomePage;
