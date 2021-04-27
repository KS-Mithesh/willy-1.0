import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Transaction extends React.Component {

  constructor(){
    super();
    this.state={
      hasCameraPermissions: null,
      scanned: false,
      scannedData: null,
      buttonState: 'normal',
    }
  }

  getCameraPermissions=async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status==='granted',
      buttonState: 'clicked',
    });
  }

  render(){
    if(this.state.hasCameraPermissions===true){
      return(
          <Text>{
            this.state.hasCameraPermissions===true
            ?'Ready To Scan'
            :'Request Camera Permission'
          }</Text>
      );
    }
    else{
      return (
        <View>
          <Text>Transaction QR Scanner</Text>
          <TouchableOpacity
          onPress={()=>{
            this.getCameraPermissions;
          }}
          >
            <Text>Scan QR/Barcode</Text>
          </TouchableOpacity>
        </View>
      );
      }
    }
}

