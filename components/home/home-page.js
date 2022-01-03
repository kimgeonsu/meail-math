import React, { useState, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList, RefreshControl, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { room } from '../../service/api';

import Card from './card';
import CreateRoom from './createRoom'
import TimeBanner from './timeBanner';
import StudyGraph from './studyGraph';


function HomePage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        getRooms()

        AsyncStorage.getItem('userInfo', (err, result) => {
            setUserInfo(JSON.parse(result));
            console.log(result);
        });
    }, []);

    const getRooms = async() => {
        setRefreshing(true);
        try {
            console.log("i'm debugging");
            let res =  await room.list();
            console.log(res.data);
            if (res) {
                setRooms(res.data);
                console.log(rooms);
                setRefreshing(false);

            }
            // console.log(res);
        } catch(e) {
            console.log(e); 
        }
    }

    const getModalVisible = (data) => {
        getRooms();
        setModalVisible(data);
        console.log("hihi");
    }

    return (
        <SafeAreaView style={styles.container}>            
            {/* 헤더 */}
            <View style={styles.header}>
                <Icon name="search" color={'#fff'} size={30} />
                <View style={styles.headerRight}>
                    <Icon name="notifications" color={'#fff'} size={30} />
                    {userInfo && <Text style={styles.profileIcon}>{userInfo.emoji}</Text>}
                </View>
            </View>
            
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={getRooms}
                        tintColor='#fff'
                    />
                }
            >
                <TimeBanner prop={userInfo}/>
                <StudyGraph />

                {/* 방 목록 */}
                <View>
                    <Text style={styles.textNow}>Now</Text>
                    {rooms && rooms.map(room => (
                            <Card setData={setModalVisible} prop={room} navigation={navigation} />
                        ))}
                </View>
            </ScrollView>

            <CreateRoom prop={modalVisible} navigation={navigation} getData={getModalVisible}/>
            <Icon onPress={() => setModalVisible(true)} name="add-circle" style={styles.addCircle} color='#fff' size={50} />
        </SafeAreaView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        textAlignVertical: 'center'

    },
    profileIcon: {
        fontSize: 25,
        marginLeft: 10
    },
    textNow: {
        fontSize: 25,
        color: '#fff',
        margin: 15,
        fontWeight: '700'
    },
    addCircle: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        
    }
})