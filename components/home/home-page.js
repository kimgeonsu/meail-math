import React, { useState, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, SectionList  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';
import { room } from '../../service/api';

import Card from './card';
import CreateRoom from './createRoom'
import TimeBanner from './timeBanner';
import StudyGraph from './studyGraph';


function HomePage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [rooms, setRooms] = useState([]);

    const aaa = [1,2,3,4,5,6];
    // useEffect(async() => {
    //     try {
    //         let res =  await room.list();
    //         const arr = res.data;
    //         console.log(arr);
    //         setRooms([...rooms, arr]);
    //         console.log(rooms);
    //     } catch(e) {
    //         console.log(e);
    //     }
    // })
    useEffect(() => {
        getRooms()
    }, []);
    useEffect(() => {
        console.log(rooms);
    },[rooms])

    const getRooms = async() => {
        try {
            console.log("i'm debugging");
            let res =  await room.list();
            const arr = res.data;
            console.log(res);
            setRooms(arr);
        } catch(e) {
            console.log(e);
        }
    }

    const getModalVisible = (data) => {
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
                    <Text style={styles.profileIcon}>👨🏿‍🚀</Text>
                </View>
            </View>
            
            <ScrollView>
                <TimeBanner />
                <StudyGraph />

                {/* 방 목록 */}
                <View>
                    <Text style={styles.textNow}>Now</Text>
                    {rooms.map(room => (
                            <Card setData={setModalVisible} prop={room} navigation={navigation} />
                        ))}
                </View>
            </ScrollView>

            <CreateRoom prop={modalVisible} navigation={navigation} getData={getModalVisible}/>
            <Icon onPress={() => setModalVisible(true)} name="add-circle" style={styles.addCircle} color={'#fff'} size={50} />
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