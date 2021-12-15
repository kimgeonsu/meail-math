import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function CategoryPage({navigation}) {

    const categories1 = [
        {icon: 'aa', subject: 'aa'},
        {icon: 'aa', subject: 'aa'},
        {icon: 'aa', subject: 'aa'},
        {icon: 'aa', subject: 'aa'},
        {icon: 'aa', subject: 'aa'},
        {icon: 'aa', subject: 'aa'}
    ]

    const subjects = [
        {
            title: '수학(상)',
            data: ["다항식의 연산", "나머지 정리", "인수분해", "복소수", "이차방정식", "이차함수", "여러가지 방정식과 부등식", "평면좌표", "직선의 방정식", "원의 방정식", "도형의 이동" ]
        },
        {
            title: "수학(하)",
            data: ["집합", "명제", "함수", "유리함수와 무리함수", "경우의 수", "순열과 조합"]
        },
        {
            title: "수학Ⅰ",
            data: ["지수와 로그", "지수함수와 로그함수", "삼각함수", "등차수열과 등비수열", "수열의 합", "수학적 귀납법"]
        },
        {
            title: "수학Ⅱ",
            data: ["수열의 극한", "급수", "여러가지 함수의 미분", "여러 가지 미분법", "도함수의 활용", "여러 가지 적분법", "정적분의 활용"]
        },
        {
            title: "확률과 통계",
            data: ["순열과 조합", "이항정리", "확률", "조건부확률", "확률분포", "통계적 추정"]
        },
        {
            title: "미적분",
            data: ["수열의 극한", "급수", "여러 가지 함수의 미분", "여러 가지 미분법", "도함수의 활용", "여러 가지 적분법", "정적분의 활용"]
        },
        {
            title: "기하",
            data: ["이차곡선", "평면벡터", "공간도형", "공간좌표"]
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="close" color={'#fff'} size={20} />
                <Text style={styles.title}>과목 선택</Text>
                <Text style={styles.textSave}>저장</Text>
            </View>
            {/* <ScrollView>
                <View style={styles.categories}>
                    {categories1.map(category => <View>
                        <View>
                            <Text>{category.icon}</Text>
                        </View>
                        <Text>{category.subject}</Text>
                    </View>)}
                </View>
            </ScrollView> */}
            <SectionList
                sections={subjects}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const Item = ( { title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

export default CategoryPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '900'
    },
    textSave: {
        color: '#00cccc',
        fontSize: 18,
        textAlignVertical: 'center'
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})