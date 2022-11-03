import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#c00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1:{
        fontSize:50,
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    pageDelete:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:15,
    },
    deleteitem:{
        justifyContent:'center',
        paddingLeft:15,
    },
    txtDelete:{
        width: 200,
        height: 20,
        alignContent: 'flex-start',
        backgroundColor:'#eee',
        padding:2,
        paddingHorizontal:20,
        borderRadius: 5,
        color: '#444',
        marginLeft: 5,
        fontSize:16,
        
    },
})

export default styles