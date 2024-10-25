import { View, Text, Image,Pressable } from 'react-native'
import * as React from 'react'

import Button from '../components/Button'
import { router,useRouter } from 'expo-router'
import {styles} from './Splash' 
const Splash = () => {
  const router = useRouter();
  return (  
    <View style ={styles.container}>
        <Image style={styles.image} source ={require('../assets/splashimage.png')}/>
        <View style = {styles.titleContainer}>
          <Text style={styles.title}>You'll Find </Text>
          <Text style = {[styles.title,styles.innerTitle]}>All you need </Text>
          <Text style={styles.title}>Here!</Text>
        </View>
    
        <Button onPress={() => router.push('/auth/Signup')} title="Sign Up" />
        <Button onPress={() => router.push('/auth/SignIn')} title="Sign In" />
    </View>
  )
}

export default Splash;