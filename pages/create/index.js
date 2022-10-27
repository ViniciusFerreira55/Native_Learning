import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles'
import { storage, db } from '../login/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'


export default function Create({navigation}){
    const [texto, setTexto] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [progressPercent, setProgressPercent] = useState(0)
    const [imageURL, setImgURL] = useState()
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()

    
    //imagem



    //fim imagem
    
    const upload = (e) => {
        const file = image 

        if(!file){
            console.log('Imagem falhou')
            return
        }

        if(!nome){
            console.log('Faltou nome')
            return
        }

        if(!email){
            console.log('Faltou email')
            return
        }

        if(image==null) return

        const storageRef = ref(
            storage,
            `images/${nome.replace(/ + /g, '')+'_'+image.nome}`
        )

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            'state_changed', 
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                )
                setTimeout(()=>{setProgressPercent(progress)}, 1000)
            },
            error =>{
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    setImageURL(downloadURL)
                })
            }
        )
    }


    return(
        <View>

        </View>
    )
}