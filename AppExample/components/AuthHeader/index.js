import {Pressable,Image, View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

const AuthHeader = ({title,onBackPress}) => {
  return (
    <View>
        <Pressable onPress={onBackPress}>
            <Image source ={require('../../assets/auth_back.png')}/>
        </Pressable>
      <Text>{title}</Text>
    </View>
  )
}

export default AuthHeader