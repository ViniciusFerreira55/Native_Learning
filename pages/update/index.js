import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Update({route, navigation}) {

    console.log(route.params.id)
    console.log(route.params.name)

    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Update</Text>         
        </View>
    )
}