import React, { useState} from 'react'
import { View, Text, TouchableOpacity  } from 'react-native';

function HomePage() {
    const [time, setTime] = useState();

    const startedTime = Date.now();
    let start = () => {setInterval(
        () =>  setTime(Date.now() - startedTime), 10, 
    );}

    return (
        <View>
            <Text>{time}</Text>
            <TouchableOpacity
                onPress={start}>
                    <Text>시작</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomePage;