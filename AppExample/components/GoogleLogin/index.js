import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {styles} from './styles'
const GoogleLogin = () => {
    const signIn = async ()=>{
        try{
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('UserInfo => ', userInfo);
        }
        catch(error){
            if(error.code === statusCodes.SIGN_IN_CANCELLED){

            }else if (error.code===statusCodes.IN_PROGRESS){

            }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
                
            }else{
                
            }
        }
    }
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={require('../../assets/google.png')}></Image>
    </TouchableOpacity>
  )
}

export default React.memo(GoogleLogin)