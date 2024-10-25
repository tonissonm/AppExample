import {SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import Signup from './auth/Signup';
import Config from 'react-native-config';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const WEB_CLIENT_ID = '';
const IOS_CLIENT_ID = '';
const REVERSED_CLIENT_ID = '';
const App = () => {
  useEffect(()=>{
    GoogleSignin.configure({
      scopes:['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID
    })
  },[])
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>
  )
}

export default React.memo(App)