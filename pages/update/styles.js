import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#0cc',
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
    foto20:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#eee',
        borderRadius:10,

    },
    foto30:{
        width:width/4,
        height:height/10,
        backgroundColor:'#5f5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    }

})

export default styles