import React, { useState, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import io from "socket.io-client"
import { room } from '../../service/api';

function RoomPage({ route, navigation}) {
    const { roomId } = route.params;
    const { count, start, stop, reset } = useCounter(0, 1000);
    const [isStop, setIsStop] = useState(false);
    const [roomInfo, setRoomInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [state, setState] = useState({name: "", ing: false});

    const socketRef = useRef();
    // useEffect(() => {
    //     socketRef.current = io.connect("http://3.145.136.64:8080");
    //     socketRef.current.emit('joinRoom', {roomName: roomId});

    //     socketRef.current.on("message", ({name, ing}) => {
    //         // setUserInfo([...userInfo, {name, ing}]);
    //     })
    //     return () => socketRef.current.disconnect()
    // }, [userInfo]);

    useEffect(() => {
        getDetail();

        AsyncStorage.getItem('userInfo', (err, result) => {
            setUserInfo(JSON.parse(result));
            console.log(result);
        });
    }, []);

    const getDetail = async() => {
        try {
            let res = await room.detail(roomId);
            console.log(res.data);
            setRoomInfo(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    const onMessageSubmit = (e) => {
        const { name, ing} = state;
        socketRef.current.emit("message", {name, ing});
        e.preventDefault();
        setState({name, ing});
    }

    let min = Math.floor(count / 60);
    let hour = Math.floor(min / 60);

    const tmp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    const exit = () => {
        navigation.navigate('homeTab')
    }

    const onStart = async() => {
        setIsStop(true);
        start();
        // let res = await room.enter(roomId, userInfo.name, userInfo.emoji);
        console.log(res);
    }
    const onStop = () => {
        setIsStop(false);
        stop();
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text style={styles.title}>{roomInfo.title}</Text>
            </View>

            {/* 내 시간 배너 */}
            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{hour} : {min % 60} : {count % 60}</Text>
            </View>

            {/* 친구들 */}
            <ScrollView>
                <View style={styles.userTable}>
                    {roomInfo.participants && roomInfo.participants.map(user => <View style={styles.friends}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.profile}>{user.emoji}</Text>
                        <Text style={styles.friendTime}>{user.time}</Text>
                    </View>)}
                </View>
            </ScrollView>
            
            {/* 푸터 */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnExit} onPress={exit}>
                    <Text style={styles.textExit}>나가기</Text>
                </TouchableOpacity>

                {!isStop &&
                    <TouchableOpacity style={styles.btnStart} onPress={onStart}>
                        <Text style={styles.textStop}>시작</Text>
                    </TouchableOpacity>
                }
                {isStop &&
                    <TouchableOpacity style={styles.btnStop} onPress={onStop}>
                        <Text style={styles.textStop}>정지</Text>
                    </TouchableOpacity>
                }
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
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },

    timeWrapper: {
        borderRadius: 15,
        margin: 10,
        padding: 10,
        backgroundColor: '#262626',
        textAlignVertical: 'center'
    },
    
    time : {
        fontSize : 60,
        color : '#fff',
        textAlign : 'center',
        textAlignVertical: 'center'
    },
    
    header: {
        display: 'flex',
        flexDirection: 'row'
    }, 

    title: {
        margin: 10,
        fontSize: 20,
        color: '#fff'
    },

    userTable: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // margin: 5
    },

    profile: {
        fontSize: 100,
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

    footer: {
        backgroundColor: '#000',
        width: '100%',
        paddingBottom: 40,
        padding: 15,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnStop: {
        backgroundColor: '#262626',
        borderRadius: 20,
        padding: 15
    },

    textStop: {
        fontSize: 15,
        color: '#fff'
    },

    btnExit: {
        backgroundColor: '#262626',
        borderRadius: 20,
        padding: 15
    },

    textExit: {
        fontSize: 15,
        color: '#fff'
    },

    btnStart: {
        backgroundColor: '#00cccc',
        borderRadius: 20,
        padding: 15
    },
})

export default RoomPage;
