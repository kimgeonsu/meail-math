import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { member, room } from "../../service/api";

function RegisterPage({ navigation }) {
    const [step, setStep] = useState(1);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState(17);
    const [pw, setPw] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [validation, setValidation] = useState(false);
    const [emoji, setEmoji] = useState('👩🏻‍🚀')
    
    const signupApi = async() => {
        navigation.navigate('login')
        return await member.signup(id, pw, name, year, phoneNumber);
    }

    const checkIdApi = async() => {
        let checker = await member.checkId(id);
        
        if (checker.message) {
            setValidation(false);
        } else {
            setValidation(true);
        }
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {step === 1 && 
                    <View>
                        <Text style={styles.title}>이름을 알려주세요!</Text>
                        <TextInput
                            autoFocus={true}
                            style={styles.input}
                            placeholder="꼭 실명을 알려주세요"
                            onChangeText={(e) => {setName(e)}}
                            value={name}
                        />
                    </View>
                }
                {step === 2 &&
                    <View>
                        <Text style={styles.title}>당신의 닉네임을 만들어주세요!</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="닉네임"
                            onChangeText={(e) => {setId(e)}}
                            value={id}
                        />
                        <TouchableOpacity
                        style={styles.btnCheck}
                        onPress={checkIdApi}
                        >
                        <Text style={styles.textCheck}>중복체크</Text>
                    </TouchableOpacity>
                    </View>}
                {step === 3 &&
                    <View>
                        <Text style={styles.title}>학년을 알려주세요!</Text>
                        <View style={{ margin: 20, borderRadius: 15}}>
                            <Picker
                                itemStyle={styles.select}
                                mode="dialog"
                                selectedValue={year}
                                useNativeAndroidPickerStyle={false}
                                onValueChange={(itemValue, itemIndex) =>
                                    setYear(itemValue)
                            }>
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="중1" value='14' />
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="중2" value='15' />
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="중3" value='16' />
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="고1" value='17' />
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="고2" value='18' />
                                <Picker.Item color={Platform.OS === "ios" ? "#fff" : 'gray'} label="고3" value='19' />
                            </Picker>
                        </View>
                    </View>
                }
                {step === 4 &&
                    <View>
                        <Text style={styles.title}>전화번호를 알려주세요</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="'-'없이 입력해주세요"
                            keyboardType="number-pad"
                            onChangeText={(e) => {setPhoneNumber(e)}}
                            value={phoneNumber}
                        />
                    </View>
                }

                {step === 5 &&
                    <View>
                        <Text style={styles.title}>비밀번호를 설정해볼까요?</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="영어와 숫자 조합해서!"
                            onChangeText={(e) => {setPw(e)}}
                            value={pw}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="똑같이 한번만 더!"
                            onChangeText={(e) => {setCheckPw(e)}}
                            value={checkPw}
                        />
                    </View>
                }

                {step === 6 &&
                    <View>
                        <Text style={styles.title}>이모지 한 개만 골라주세요</Text>
                        <Text style={styles.emoji}>{emoji}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="이쁜 이모지 골라주세요"
                            onChangeText={(e) => {setEmoji(e)}}
                            value={emoji}
                        />
                    </View>
                }

                {step !== 6 &&
                    <TouchableOpacity
                    style={styles.btnNext}
                    onPress={() => {setStep(step+1)
                    }}
                    >
                        <Text style={styles.textNext}>다음으로</Text>
                    </TouchableOpacity>
                }
                {step === 6 &&
                    <TouchableOpacity
                    style={styles.btnNext}
                    onPress={signupApi}
                    >
                        <Text style={styles.textNext}>완료</Text>
                    </TouchableOpacity>
                }
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    },
    title: {
        margin: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: '900'
    },
    input: {
        textAlign: 'center',
        padding: 10,
        borderRadius: 15,
        margin: 40,
        fontSize: 20,
        backgroundColor: '#ddd'
    },
    btnNext: {
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: '#00cccc',
        color: '#fff',
        borderRadius: 20,
        padding: 15,
    },
    textNext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    btnCheck: {
        marginLeft: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#00cccc',
        padding: 15,
        width: '30%',
        float: 'right'
    },
    textCheck: {
        textAlign: 'center',
        color: '#00cccc'
    },
    select: {
        margin: 20,
        color: 'white',
        backgroundColor: '#000'
    },
    emoji: {
        textAlign: 'center',
        fontSize: 100
    }
})

export default RegisterPage;