import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

function RegisterPage() {
    const [step, setStep] = useState(1);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState();
    const [pw, setPw] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkPw, setCheckPw] = useState('');

    return (
        <View style={styles.container}>
            {step === 1 && 
            <View style={styles.context}>
                <Text style={styles.title}>이름을 알려주세요!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(e) => {setName(e)}}
                    value={name}
                />
            </View>}
            {step === 2 &&
            <View>
                <Text style={styles.title}>아이디를 만들어봅시다!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ID"
                    onChangeText={(e) => {setId(e)}}
                    value={id}
                />
                <TouchableOpacity
                style={styles.btnCheck}
                onPress={() => {}}
                >
                <Text style={styles.textCheck}>중복체크</Text>
            </TouchableOpacity>
            </View>}
            {step === 3 &&
            <View>
                <Text style={styles.title}>학년을 알려주세요!</Text>
                <Picker
                    itemStyle={styles.select}
                    selectedValue={year}
                    onValueChange={(itemValue, itemIndex) =>
                        setYear(itemValue)
                }>
                    <Picker.Item color="white" label="중1" value='14' />
                    <Picker.Item color="white" label="중2" value='15' />
                    <Picker.Item color="white" label="중3" value='16' />
                    <Picker.Item color="white" label="고1" value='17' />
                    <Picker.Item color="white" label="고2" value='18' />
                    <Picker.Item color="white" label="고3" value='19' />
            </Picker>
            </View>
            }
            {step === 4 &&
            <View>
                <Text style={styles.title}>'-' 없이 전화번호를 입력해주세요!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="phoneNumber"
                    keyboardType="number-pad"
                    onChangeText={(e) => {setPhoneNumber(e)}}
                    value={phoneNumber}
                />
            </View>}

            {step === 5 &&
            <View>
                <Text style={styles.title}>비밀번호를 설정해볼까요?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={(e) => {setPw(e)}}
                    value={pw}
                />
                <TextInput
                    style={styles.input}
                    placeholder="one more time!"
                    onChangeText={(e) => {setCheckPw(e)}}
                    value={checkPw}
                />
            </View>
            }


            {step !== 5 &&
            <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {setStep(step+1)
            }}
            >
                <Text style={styles.textNext}>다음으로</Text>
            </TouchableOpacity>
            }
            {step === 5 &&
                <TouchableOpacity
                style={styles.btnNext}
                onPress={() => {setStep(step+1)
                }}
                >
                <Text style={styles.textNext}>완료</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929',
        height: '100%',
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '900'
    },
    input: {
        textAlign: 'center',
        marginTop: 30,
        padding: 10,
        borderRadius: 15,
        fontSize: 20,
        backgroundColor: '#ddd'
    },
    btnNext: {
        position: 'absolute',
        backgroundColor: '#ffc000',
        color: '#fff',
        borderRadius: 20,
        padding: 15,
        top: 80,
        right: 20
    },
    textNext: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    btnCheck: {
        marginTop: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffc000',
        padding: 15,
        color: '#ffc000',
        width: '40%'
    },
    textCheck: {
        textAlign: 'center',
        color: '#ffc000'
    },
    select: {
        color: 'white',
        // backgroundColor: '#ddd'
    }
})

export default RegisterPage;