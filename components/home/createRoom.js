import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { room } from '../../service/api';
import CategoryPage from './selectCategory';

function CreateRoom({ prop, navigation, getData }) {
    const [title, setTitle] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [info, setInfo] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const onCreateRoom = async() => {
        try {
            let res = await room.create(title, "미적분", "안녕");
            setTitle('');
            getData(false);
        } catch(e) {
            console.log(e);
        }
    }

    const goSelectCategory = () => {
        setModalVisible(true);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={prop}
            onRequestClose={() => {
                getData(false);
            }}
        >
            <View style={styles.centeredView}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalView}
                >
                    <CategoryPage setSelect={setSubjects} setModalVisible={setModalVisible} modalVisible={modalVisible} />
                    {subjects.length === 0 &&
                        <View style={styles.wrapper}>
                            <TouchableOpacity style={styles.btnSubject} onPress={goSelectCategory}>
                                <Text style={styles.subjectText}>
                                    <Icon name="add" color="#fff" size={15} />
                                    과목설정
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {subjects.length > 0 &&
                        <ScrollView horizontal={true} style={{marginBottom: 20}}>
                            {subjects.map(e => 
                                <View style={styles.selectedCover}>
                                    <Text style={styles.selectedCategories}>{e}</Text>
                                </View>
                            )}
                        </ScrollView>
                    }

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
    },
    selectedCover: {
        backgroundColor: '#00cccc',
        margin: 5,
        borderRadius: 15,
        padding: 5
    },
    selectedCategories: {
        color: '#fff',
        fontSize: 15
    }
})