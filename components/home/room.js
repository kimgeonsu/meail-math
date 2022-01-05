import React, { useState, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import io from "socket.io-client"
import { room } from '../../service/api';
import RoomUser from './roomUser';

const ENDPOINT = "http://3.145.136.64:8080"

let socket;

function RoomPage({ route, navigation}) {
    const { roomId } = route.params;
    const { count, start, stop, reset } = useCounter(0, 1000);
    const [isStop, setIsStop] = useState(false);
    const [roomInfo, setRoomInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [state, setState] = useState({name: "", ing: false});
    const [isEnter, setIsEnter] = useState(false);

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState('');

    useEffect(() => {
        socket = io(ENDPOINT);

        if (userInfo) {
            let name = userInfo.name
            socket.emit('join', { name, roomId }, (error) => {
            if (error) {
                alert(error);
            }
        })
        }
    }, [ENDPOINT])

    useEffect(() => {
        getDetail();

        AsyncStorage.getItem('userInfo', (err, result) => {
            setUserInfo(JSON.parse(result));
            console.log(result);
        });

        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
        })
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
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

    const sendMessage = (event) => {
        event.preventDefault()
    
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }



    const exit = async() => {
        let res = await room.exit(roomId, userInfo.name);
        console.log(res);
        navigation.navigate('homeTab')
    }

    const onStart = async() => {
        setIsStop(true);
        start();
        if (!isEnter) {
            let res = await room.enter(roomId, userInfo.name, userInfo.emoji);
            console.log(res);
            setIsEnter(true);

            
        }
        console.log("res : ", res);
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
                <Text style={styles.time}>{timeConverter(count)}</Text>
            </View>

            {/* 친구들 */}
            <ScrollView>
                <View style={styles.userTable}>
                    {roomInfo.participants && roomInfo.participants.map(user => <RoomUser prop={user} />)}
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

function timeConverter(data) {
    let min = Math.floor(data / 60);
    let hour = Math.floor(min / 60);

    return (hour < 10 ? '0'+ hour : hour) + ":" + (min % 60 < 10 ? '0'+(min%60) : (min%60)) + ":" + (data % 60 < 10 ? '0'+(data % 60): (data%60));
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
