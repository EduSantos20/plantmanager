import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';

export function Load() {
    return (
        <View style={Style.container}>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={Style.animate}
            />

        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animate: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }
})