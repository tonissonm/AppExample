import {Pressable,Image, View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'
import {useRouter} from 'expo-router'
const AuthHeader = ({title,onPress}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Pressable onPress={() => router.push('/')}>
            <Image source ={require('../../assets/auth_back.png')}/>
        </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default AuthHeader