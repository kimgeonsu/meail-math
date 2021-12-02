import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

function CreateRoom({ prop }) {
    const [modalVisible, setModalVisible] = useState(prop);
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [info, setInfo] = useState('');
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>방제</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="방제를 적어주세요"
                    onChangeText={(e) => {setTitle(e)}}
                    value={title}
                    />
                    <Text>공부할 거</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="공부할 과목 또는 범위 또는 주제 자세하게~"
                    onChangeText={(e) => {setSubject(e)}}
                    value={subject}
                    />
                    <Text>한 줄 소개</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="간단하게 써주세요"
                    onChangeText={(e) => {setInfo(e)}}
                    value={info}
                    />

                    <TouchableOpacity
                        style={styles.btnNext}
                        onPress={() => {setModalVisible(false)
                        }}
                    >
                        <Text style={styles.textNext}>만들기!</Text>
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
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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

})