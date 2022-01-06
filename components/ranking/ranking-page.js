import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/native';

import { timer } from '../../service/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

function RankingPage() {
    const [rankingObjs, setrankingObjs] = useState([]);
    const [myRank, setMyRank] = useState();
    const [userInfo, setUserInfo] = useState();

    useFocusEffect(
        React.useCallback(() => {
            getRanking();
            return () => {
                console.log("not focus");
            }
        }, [])
    );

    useEffect(() => {
        AsyncStorage.getItem('userInfo', (err, result) => {
            setUserInfo(JSON.parse(result));
            console.log(result);
        });

        getRanking();
    }, []);

    const getRanking = async() => {
        let res = await timer.rank();
        console.log(res.data);
        setrankingObjs(res.data);

        if (userInfo) {
            let filter = rankingObjs.fiter(e => e.name === userInfo.name);
            setMyRank(filter[0]);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>랭킹</Text>
            {myRank && 
                <View style={styles.myRankWrapper}>
                    <View style={styles.nameProfileWrapper}>
                        <Text style={styles.profileIcon}>{myRank.emoji}</Text>
                        <View>
                            <Text style={styles.name}>{myRank.name}</Text>
                            <Text style={styles.myTime}>{timeConverter(myRank.time)}</Text>
                        </View>
                    </View>
                    <Text style={styles.myRank}>5등</Text>
                </View>}
            <ScrollView>
                {rankingObjs.map((item, idx) => <View style={styles.friends}>
                    <Text style={styles.ranking}>{idx+1}</Text>
                    <Text style={styles.profileIcon}>{item.emoji}</Text>
                    <View>
                        <Text style={styles.rankerName}>{item.name}</Text>
                        <Text style={styles.rankerGrade}>{yearConverter(item.year)}</Text>
                    </View>
                    <Icon name="schedule" color='#fff' size={30} style={styles.iconTime} />
                    <Text style={styles.rankerTime}>{timeConverter(item.time)}</Text>
                </View>)}
            </ScrollView>
        </SafeAreaView>
    );
}

function timeConverter(data) {
    let min = Math.floor(data / 60);
    let hour = Math.floor(min / 60);

    return (hour < 10 ? '0'+ hour : hour) + ":" + (min % 60 < 10 ? '0'+(min%60) : (min%60)) + ":" + (data % 60 < 10 ? '0'+(data % 60): (data%60));
}

function yearConverter(data) {
    switch (data) {
        case 14:
            return '중1'
        case 15:
            return '중2'
        case 16:
            return '중3'
        case 17:
            return '고1'
        case 18:
            return '고2'
        case 19:
            return '고3'
        default:
            break;
    }
}

export default RankingPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        margin: 10,
        textAlign: 'center'
    },
    myRankWrapper: {
        backgroundColor: '#464656',
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    nameProfileWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    profileIcon: {
        fontSize: 50,
    },
    name: {
        marginTop: 10,
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,
    },
    myTime: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 30,
    },
    myRank: {
        margin: 10,
        color: '#00cccc',
        fontSize: 35,
    },
    friends: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#262626'
    },

    ranking: {
        color: '#fff',
        fontSize: 30,
        // marginTop: 5,
        marginRight: 20
    },
    rankerName: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10
    },
    rankerGrade: {
        color: '#999',
        marginLeft: 10
    },
    rankerTime: {
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
        textAlign: 'center'
    },
    iconTime: {
        marginTop: 13,
        marginLeft: 20
    }
})