import React, { useState} from 'react'
import { View, Text, TouchableOpacity  } from 'react-native';

function HomePage() {
    const [time, setTime] = useState();


    let interval;
    const startedTime = Date.now();
    let start =  () => {
        interval =  setInterval(() => 
            setTime(Date.now() - startedTime), 10);
    }
    let end = () => {
        clearInterval(interval);
    }

    return (
        <View>
            <Text>{time}</Text>
            <TouchableOpacity
                onPress={start}>
                    <Text>시작</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={end}>
                    <Text>정지</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomePage;