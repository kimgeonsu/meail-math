import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity  } from 'react-native';

function HomePage() {
    // let interval;
    // const startedTime = Date.now();
    // let start =  () => {
    //     interval =  setInterval(() => 
    //         setTime(Date.now() - startedTime), 10);
    // }
    // let end = () => {
    //     clearInterval(interval);
    // }
    const { count, start, stop, reset } = useCounter(0, 1000);

    return (
        <View>
            <Text>{count}</Text>
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
            setCount(Date.now() - initialValue);
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

export default HomePage;