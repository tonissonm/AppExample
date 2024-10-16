import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import {styles} from './styles'
import Button from '../../components/button'
const Splash = () => {
  return (
    <View style ={styles.container}>
        <Image style={styles.image} source ={require('../../assets/splashimage')}/>
        <View style = {styles.titleContainer}>
          <Text style={styles.title}>You'll Find </Text>
          <Text style = {[styles.title,styles.innerTitle]}>All you need </Text>
          <Text style={styles.title}>Here!</Text>
        </View>
    
        <Button title="Sign Up"/>
        <Pressable hitSlop={20}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
    </View>
  )
}

export default Splash;