import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { room } from '../../service/api';

function CreateRoom({ prop, setData, navigation }) {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [info, setInfo] = useState('');
    
    const onCreateRoom = async() => {
        try {
            let res = await room.create(title, subject, info);
            setData(false);
        } catch(e) {
            console.log(e);
        }
    }

    const goSelectCategory = () => {
        setData(false);
        navigation.navigate('categoryPage')
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={prop}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalView}
                >
                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.btnSubject} onPress={goSelectCategory}>
                            <Text style={styles.subjectText}>
                                <Icon name="add" color="#fff" size={15} />
                                과목설정
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                    multiline={true}
                    autoFocus={true}
                    numberOfLines={3}
                    style={styles.input}
                    placeholder="무슨 공부를 시작해볼까요?"
                    placeholderTextColor={'#fff'}
                    onChangeText={(e) => {setTitle(e)}}
                    value={title}
                    />

                    <TouchableOpacity
                        style={styles.btnMake}
                        onPress={onCreateRoom}
                    >
                        <Text style={styles.textMake}>만들기!</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
}

export default CreateRoom;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    modalView: {
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 0
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#222',
        width: "100%",
        borderRadius: 20
    },
    wrapper: {
        width: '100%'
    },  
    btnSubject: {
        width: '25 %',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#344',
        margin: 10,
    },  
    subjectText: {
        color: '#fff',
        fontSize: 15,
        textAlignVertical: 'center'
    },
    input: {
        width: '100%',
        height: 100,
        color: '#fff',
        fontSize: 20
    },
    btnMake: {
        backgroundColor: '#00cccc',
        padding: 10,
        borderRadius: 15,
        margin: 20,
    },
    textMake: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})