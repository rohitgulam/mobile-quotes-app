import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import logo from '../assets/logo.png';
import quotes from 'quotes.json';

const Main = () => {
  
  return (
    <View style={styles.container} >
      {/* <Image source={logo} style={styles.logo} /> */}
      <Text style={styles.quote}>One should love you the way you are. If someone tries to change you in love, then its not love but a compromise and one doesn't compromise in love</Text>

      <TouchableOpacity onPress={() => alert('Hello world!')} style={styles.button}>
        <Text style={styles.buttonText}> Pick a photo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo:{
    width:195, 
    height:195,
    marginBottom: 10
  },
  quote: {
    color: '#888', 
    fontSize: 28,
    marginHorizontal: 15,
    marginTop: 170
  },
  button: {
    backgroundColor: '#4353FF',
    padding: 20,
    borderRadius: 5,
    marginTop: 100
  },
  buttonText:{
    fontSize: 20,
    color: '#fff'
  },


})