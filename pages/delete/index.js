import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles'
import {FontAwesome} from '@expo/vector-icons'
import {db} from '../login/firebaseConfig'
import {doc, deleteDoc, getDocs, collection} from 'firebase/firestore'
import { Navigate } from 'react-router-dom';


export default function Delete({navigation}){
    const [page, setPage] = useState([])

    function deleteItem(id){
        deleteDoc(doc(db, "alunos", id));
    }

    useEffect(async()=>{
        const querySnapshot = await getDocs(collection(db, "alunos"));
        const list=[]
        querySnapshot.forEach((doc)=>{
            list.push({...doc.data(), id: doc.id})
        });

        setPage(list)
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>Delete</Text>
        
        <FlatList 
            data={page}
            renderItem={({item})=>{
                return(
                    <View style={styles.pageDelete}>
                        <TouchableOpacity 
                            style={styles.deleteitem}        
                            onPress={()=>{deleteItem(item.id)}}                
                        >
                        <FontAwesome 
                            name='trash'
                            size={25}
                            color='#ff0'
                        />
                        </TouchableOpacity>

                        <Text 
                            style={styles.txtDelete}
                            onPress={()=>{
                                navigation.navigate("Update", {
                                    id: item.id,
                                    name: item.name,
                                    email: item.email
                                })
                            }}
                        >
                            {item.name} 
                        </Text>

                        <Text 
                            style={styles.txtDelete}
                            onPress={()=>{
                                navigation.navigate("Update", {
                                    id: item.id,
                                    name: item.name,
                                    email: item.email
                                })
                            }}
                        >
                            {item.email} 
                        </Text>
                    </View>
                )
            }}
        />
        
        
        </View>
    )
}