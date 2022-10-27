import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex:0.2,
        width: '100%',
        alignItems:'center',
    },
    container2: {
        flex:0.8,
        backgroundColor:'#ddd',
        width:'100%',
        padding:20,
        alignItems: 'center',
    },
    texto1: {
        fontSize: 50,
        color: '#fff',
        
    },
    texto2:{
        fontSize: 40,
        color: '#333'
    },
    botao: {
        width: 250,
        height:40,
        backgroundColor:'#fff',
        borderRadius: 20,
        justifyContent:'center'
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 15,
        color: '#000',

    },
    top1:{
        flexDirection: 'column'
    },
    caixa1:{
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '100%',
        padding: 10,
    },
    foto:{
        width:150,
        height: 150,
        backgroundColor:'#409540',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    fundo:{
        paddingBottom:10,
        paddingTop: 2,
        alignItems:'center',
    },
})

export default styles