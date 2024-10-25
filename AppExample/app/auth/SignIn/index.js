import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import AuthHeader from '../../../components/AuthHeader'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import {styles} from './styles'
const Signin = () => {
    return (
      <View style={styles.container}>
          <AuthHeader title="Sign In"/>
          <Input label ="Email" placeholder = "example@gmail.com"/>
          <Input label ="Password" placeholder ="******"/>
          <Button style={styles.button} title="Sign In"/>
          <Separator text="Or signup with"/>
          <GoogleLogin/>
          <Text style ={styles.footerText}>Already have an account?
            <Text style={styles.footerLink}>Sign In</Text>
          </Text>
  
      </View>
    )
}

export default Signin