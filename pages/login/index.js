import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import { auth, logInWithEmailAndPassword } from './firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigation()

    useEffect(()=>{
        if (loading){
            return;
        }
        if (user) navigate.navigate('Create')
    }, [user, loading])

    const loginFirebase = () => {
        logInWithEmailAndPassword(email,password)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>Login</Text>
            <View>
                <View>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='User'  
                        keyboardType='text'
                        value={email}   
                        onChangeText={(e)=>{setEmail(e)}}                 
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Password'   
                        secureTextEntry={true}
                        keyboardType='password' 
                        value={password}
                        onChangeText={(p)=>{setPassword(p)}}               
                    />
                </View>
                <View style={styles}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {loginFirebase()}}
                    >
                        <Text style={styles.txtButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}