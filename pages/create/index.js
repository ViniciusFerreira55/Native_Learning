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

    async function adicionar(){
        await addDoc(collection(db, 'alunos'),
        {
            name: nome,
            email: email,
            status: false,
            image: nome.replace(/ + /g, '')+'_'+image.name
        }
        
        )
        setNome('')
        setEmail('')
        setTexto('Cadastrado com sucesso :) SZ')
        setPreview(undefined)
    }
    //imagem

        useEffect(()=>{
            if(!image){
                setPreview(undefined)
                return
            }
            const objectURL = URL.createObjectURL(image)
            setPreview(objectURL)

            return () => URL.revokeObjectURL(objectURL)

        }, [image])

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
            `images/${nome.replace(/ + /g, '')+'_'+image.name}`
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
                    setImgURL(downloadURL)
                })
            }
            
        )
        adicionar()
        
    }
    

    return(
        <View style={styles.container}>
            
            <View style={styles.container1}>
                <Text style={styles.texto1}>Create</Text>
            </View>
            
            <View style={styles.container2}>
                <Text style={styles.texto2}>Cadastro</Text>
                
                <View style={styles.top1}>
                    <View style={{paddingBottom: 10, paddingTop: 10}}>
                        <TextInput 
                        style={styles.caixa1}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={e=>{setNome(e)}}
                        />
                    </View>

                    <View style={{paddingBottom: 10, paddingTop: 10}}>
                        <TextInput 
                        style={styles.caixa1}
                        placeholder='Email'
                        value={email}
                        onChangeText={e=>{setEmail(e)}}
                        />  
                    </View>
                
                </View>

                <View style={{padding: 10, alignItems: 'center'}}>
                    <img src={preview} style={styles.foto}/>
                </View>

                <View style={styles.fundo}>
                    <input 
                    type='file'
                    onChange={e=>{setImage(e.target.files[0])}}
                    />
                </View>

                <View style={{alignItems:'center'}}>
                    <View style={styles.botao}>
                        <TouchableOpacity 
                        style={styles.btn}
                        onPress={upload}
                        >
                            <Text style={styles.txtButton}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}