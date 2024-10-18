import { View } from 'react-native'
import AuthHeader from '../../components/AuthHeader'
import Input from '../../components/Input'
import React,{useState} from 'react'
import Checkbox from '../../components/CheckBox'
import Separator from '../../components/Separator'

const Signup = () => {
  const [checked,setChecked] = useState(false)
  return (
    <View style={styles.container}>
        <AuthHeader title="Sign Up"/>
        <Input label = "Name" placeholder="John Doe"/>
        <Input label ="Email" placeholder = "example@gmail.com"/>
        <Input label ="Password" placeholder ="******"/>
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked}/>
          <Text style={styles.agreeText}>I agree with the <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign In"/>
        <Separator text="Or signup with"/>
    </View>
  )
}

export default Signup