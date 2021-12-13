import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="close" color={'#fff'} size={20} />
                <Text style={styles.title}>과목 선택</Text>
                <Text style={styles.textSave}>저장</Text>
            </View>
            <ScrollView>
                <View style={styles.categories}>
                    {categories1.map(category => <View>
                        <View>
                            <Text>{category.icon}</Text>
                        </View>
                        <Text>{category.subject}</Text>
                    </View>)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CategoryPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
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