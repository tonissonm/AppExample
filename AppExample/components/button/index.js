import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

const Button = ({title,onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} styles={styles.container}>
            <Text styles = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button