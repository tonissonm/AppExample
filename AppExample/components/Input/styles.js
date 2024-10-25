import { StyleSheet } from 'react-native';
import {colors} from '../../utils/colors'
export const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    inputContainer:{
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:14,
        flexDirection:'row',
        alignItems:'center',
        width:'100%'
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:15
    },
    label:{
        marginBottom:8,
        color:colors.blue,
        fontWeight:'500'
    },




    agreeRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    agreeText:{
        color: colors.blue,
        marginHorizontal:14
    },
    agreeTextBold:{
        fontWeight:'bold'
    },
    button:{
        marginVertical:20
    }
});