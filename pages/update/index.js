import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import styles from './styles'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../login/firebaseConfig'

export default function Update({ route, navigation }) {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [cfoto, setCFoto] = useState()
    const [textoNome, setTextoNome] = useState()
    const [textoEmail, setTextoEmail] = useState()
    const [acesso, setAcesso] = useState()


    useEffect(() => {
        if (route.params != null) {
            setId(route.params.id)
            setNome(route.params.name)
            setEmail(route.params.email)
            setFoto(route.params.image)
            setAcesso(doc(db, "alunos", route.params.id))
        }

    }, [])

    const salvar = async () => {
        await updateDoc(acesso, {
            "name": textoNome,
            "email": textoEmail
        });
    }

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/crud-smart3.appspot.com/o/images%2F'
    const media = '?alt=media'

    return (
        <View style={styles.container}><Text style={styles.texto1}>Update</Text>
            <View style={styles.foto0}>
                <img src={repositorio + foto + media} style={styles.foto1} />
            </View>
            <Text>
                Nome:
                <TextInput
                    onChangeText={(e) => { setTextoNome(e) }}
                    value={textoNome}
                    placeholder={nome}
                />
            </Text>

            <Text>
                Email:
                <TextInput
                    onChangeText={(e) => { setTextoEmail(e) }}
                    value={textoEmail}
                    placeholder={email}
                />
            </Text>
            <View style={{width: 150, height:40, backgroundColor:'#000', color:'#fff'}}>
                <TouchableOpacity
                    onPress={()=>{salvar()}}
                >
                    <Text style={{color:'#fff'}}>SALVAR</Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}