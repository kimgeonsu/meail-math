import React, { useState } from 'react';
import { View, Text } from 'react-native';

function Card({ prop }) {
    
    return (
        <View>
            <Text>{prop.title}</Text>
            <Text>{prop.subject}</Text>
            <Text>참여인원: {prop.allCount}</Text>
            <Text>공부중: {prop.ing}</Text>
        </View>
    );
}

export default Card;