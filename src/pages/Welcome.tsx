import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

import wateringImg from '/Users/Eduar/nlw/plantmanager/src/assets/watering.png';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIndentification');
    }

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.wrapper}>

                <Text style={Style.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={Style.Image}
                    resizeMode="contain" />

                <Text style={Style.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <TouchableOpacity
                    style={Style.button}
                    activeOpacity={0.7}
                    onPress={handleStart}>

                    <Feather
                        name='chevron-right'
                        style={Style.buttonIcon} />

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.green,
        fontFamily: fonts.text

    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,

    },
    Image: {
        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 28
    }

});