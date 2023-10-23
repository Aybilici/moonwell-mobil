import React, {useState, useEffect} from 'react';
import { SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity, } from 'react-native';

export default function SettingsScreen() {
    const [serverIPText, setServerIPText] = useState('');
    const [serverPortText, setServerPortText] = useState('');
    const [accountText, setAccountText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.textStyle}>
        Lütfen doldurunuz!
        </Text>
            <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (serverIPText) => setServerIPText(serverIPText)
          }
          placeholder="Server IP"
          value={serverIPText}
        />

<TextInput
          style={styles.textInputStyle}
          onChangeText={
            (serverPortText) => setServerPortText(serverPortText)
          }
          placeholder="Server Port"
          value={serverPortText}
        />

<TextInput
          style={styles.textInputStyle}
          onChangeText={
            (accountText) => setAccountText(accountText)
          }
          placeholder="Kullanıcı Adı"
          value={accountText}
        />

<TextInput
          style={styles.textInputStyle}
          onChangeText={
            (passwordText) => setPasswordText(passwordText)
          }
          placeholder="Şifre"
          value={passwordText}
        />
        
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Kaydet
          </Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    titleStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textStyle: {
      textAlign: 'center',
      margin: 10,
    },
    textInputStyle: {
      flexDirection: 'row',
      height: 40,
      width: '80%',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      margin: 10,
      backgroundColor: '#51D8C7',
      color: 'white'
    },
    buttonStyle: {
      backgroundColor: 'blue',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#51D8C7',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 30,
      padding: 10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
  });