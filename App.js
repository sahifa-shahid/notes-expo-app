import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
// import { MongoClient } from 'mongodb';

import './shim.js'
import MakeList from './toDo';

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sahifa-shahid:PASSWORD@cluster-sahifa-tm3bl.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(uri, function (err, client) {
//   if (err) {
//     console.log("Can't connected");
//   } 
//   // else {
//   //   console.log("We are connected");
//   //   let collection = client.db('sample_toDo').collection('user_1');
//   //   console.log(collection)
//   //   //client.close() should be called after you are done performing actions such as collection.update, etc.
//   // }
// });

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <View>
        <MakeList style={styles.container} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // background: 'linear-gradient(180deg, #000000 0%, rgba(232, 232, 232, 0) 100%), #000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});