import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

function CreateRoom({ prop, setData }) {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [info, setInfo] = useState('');
    

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
                <View style={styles.modalView}>
                    <Text style={styles.inputText}>방제</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="방제를 적어주세요"
                    onChangeText={(e) => {setTitle(e)}}
                    value={title}
                    />
                    <Text style={styles.inputText}>공부할 거</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="과목 or 범위 or 주제"
                    onChangeText={(e) => {setSubject(e)}}
                    value={subject}
                    />
                    <Text style={styles.inputText}>한 줄 소개</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="간단하게 써주세요"
                    onChangeText={(e) => {setInfo(e)}}
                    value={info}
                    />

                    <TouchableOpacity
                        style={styles.btnMake}
                        onPress={() => {setData(false)}}
                    >
                        <Text style={styles.textMake}>만들기!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default CreateRoom;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '80%',
        height: '50%',
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        width: '90%',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        padding: 10,
        borderRadius: 15,
        fontSize: 15,
        backgroundColor: '#ddd'
    },
    inputText: {
        
        fontSize: 15,
        fontWeight: 'bold'

    },
    btnMake: {
        backgroundColor: '#ffc000',
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    textMake: {
        color: '#fff',
        fontWeight: 'bold'
    }
})