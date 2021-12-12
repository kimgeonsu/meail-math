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
        <SafeAreaView>
            <View>
                <Icon name="search" color={'#fff'} size={30} />
                <Text>과목 선택</Text>
                <Text>저장</Text>
            </View>
            <ScrollView>
                <View>
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