import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

function RegisterPage() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [year, setYear] = useState();
    const [pw, setPw] = useState('');
    const [checkPw, setCheckPw] = useState('');

    return (
        <View>
            <Text>회원가입 페이지</Text>
            {step === 1 && 
            <View>
                <Text>이름을 알려주세요!</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={(e) => {setName(e)}}
                    value={name}
                />
            </View>}
            {step === 2 &&
            <View>
                <Text>학년을 알려주세요!</Text>
                <Picker
                    selectedValue={year}
                    onValueChange={(itemValue, itemIndex) =>
                        setYear(itemValue)
                }>
                    <Picker.Item label="중1" value='14' />
                    <Picker.Item label="중2" value='15' />
                    <Picker.Item label="중3" value='16' />
                    <Picker.Item label="고1" value='17' />
                    <Picker.Item label="고2" value='18' />
                    <Picker.Item label="고3" value='19' />
                    </Picker>
            </View>
            }
            {step === 3 &&
            <View>
                <Text>비밀번호를 설정해볼까요?</Text>
                <TextInput
                    placeholder="password"
                    onChangeText={(e) => {setPw(e)}}
                    value={pw}
                />
                <TextInput
                    placeholder="one more time!"
                    onChangeText={(e) => {setCheckPw(e)}}
                    value={checkPw}
                />
            </View>}
            <TouchableOpacity
                onPress={() => {setStep(step+1)
                }}
            >
                <Text>다음으로</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterPage;