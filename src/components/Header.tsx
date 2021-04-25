import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import userImg from '/Users/Eduar/nlw/plantmanager/src/assets/Eduardo.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user')

            setUserName(user || '');
        }
        loadStorageUserName();

    }, []);

    return (
        <View style={Style.contianer}>
            <View>
                <Text style={Style.greeting}>Olá,</Text>
                <Text style={Style.userName}>
                    {userName}
                </Text>
            </View>

            <Image source={userImg} style={Style.image} />

        </View>
    )
}
const Style = StyleSheet.create({
    contianer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70, //borda da imagem
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    }
});
