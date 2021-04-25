import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIndentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [nome, setnome] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!nome);
    }
    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setnome(value)
    }

    async function handleStart() {
        if (!nome)
            return Alert.alert('Me diz como chamar você ❤')


        await AsyncStorage.setItem('@plantmanager:user', nome);

        navigation.navigate('Confirmation');

    }

    return (
        <SafeAreaView style={Style.container}>
            <KeyboardAvoidingView style={Style.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={Style.content}>
                        <View style={Style.form}>
                            <View style={Style.header}>
                                <Text style={Style.emoji}>
                                    {isFilled ? '❤' : '�'}
                                </Text>
                                <Text style={Style.title}>
                                    Como podemos{'\n'}
                                chamar você?
                            </Text>
                            </View>

                            <TextInput style={[
                                Style.input,
                                (isFocused || isFilled) &&
                                { borderColor: colors.green }
                            ]}
                                placeholder='Digite seu nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange} />

                            <View style={Style.footer}>

                                <Button
                                    title="Confirmar"
                                    onPress={handleStart}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'
    },
    emoji: {
        fontSize: 60
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20

    }
});