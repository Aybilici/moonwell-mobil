import React, {useState, useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    RefreshControl,
    ScrollView,
  } from 'react-native';

  

export default function HomeScreen() {
    const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  const [datas, setData] = useState('');

  const getAPI = async () => {
    const url = "http://159.146.90.69:5000/Mw301_QRCodes";
    let result = await fetch(url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        //body: JSON.stringify(datas)
    });
    result = await result.json();
    setData(result)
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() =>{
      getAPI()
  }, [])
  
    return (

            <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
          
      <Text style={styles.titleStyle}>
          Moonwell
        </Text>
        <QRCode
          value={qrvalue ? qrvalue : `{datas.data}`}
          size={250}
          color="black"
          backgroundColor="white"
          
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
        QR kodu : {datas.data}
        </Text>
        
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(datas.data)}>
          <Text style={styles.buttonTextStyle}>
            QR Code Oluştur
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

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
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });