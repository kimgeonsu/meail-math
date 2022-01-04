import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { timer } from '../../service/api';

function RankingPage() {
    const [rankingObjs, setrankingObjs] = useState([]);

    useEffect(() => {
        getRanking();
    }, []);

    const getRanking = async() => {
        let res = await timer.rank();
        console.log(res.data);
    }

    const tmp = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>랭킹</Text>
            <View style={styles.myRankWrapper}>
                <View style={styles.nameProfileWrapper}>
                    <Text style={styles.profileIcon}>👨🏿‍🚀</Text>
                    <View>
                        <Text style={styles.name}>이름</Text>
                        <Text style={styles.myTime}>00:00:00</Text>
                    </View>
                </View>
                <Text style={styles.myRank}>5등</Text>
            </View>
            <ScrollView>
                {tmp.map(item => <View style={styles.friends}>
                    <Text style={styles.ranking}>3</Text>
                    <Text style={styles.profileIcon}>👨🏿‍🚀</Text>
                    <View>
                        <Text style={styles.rankerName}>이름</Text>
                        <Text style={styles.rankerGrade}>고1</Text>
                    </View>
                    <Icon name="schedule" color='#fff' size={30} style={styles.iconTime} />
                    <Text style={styles.rankerTime}>00:00:00</Text>
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