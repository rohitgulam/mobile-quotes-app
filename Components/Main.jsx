import { Image, StyleSheet, Text, View, TouchableOpacity as TouchableOpcaity } from 'react-native';
import {useEffect, useState} from 'react';
import logo from '../assets/logo.png';


const Main = () => {

  const [num, setNum] = useState(0)

  const quotes = [
    {
      id: 0,
      quote: 'Love is very beautiful ... so what if it brings a little bit of pain with it'
    },
    {
      id: 1,
      quote: "One should love you, the way you are ... if someone tries to change you in love, then its not love but a compromise ... and darling, one doesn't compromise in love"  
    },
    {
        id: 3,
        quote: "Not everyone has the same heart as you"
    },
    {
        id: 4,
        quote: "No response is a response"  
    },
    {
        id: 5,
        quote: "Revenge will not bring you peace, only death"
    },
    {
        id: 6,
        quote: "Land and silver is what all men desire"  
    },
    {
        id: 7,
        "quote": "Whether you think you can or you think you can’t, you’re right"
    },
    {
        id: 8,
        quote: "The opposite of love is not hate; it’s indifference"  
    },
    {
        id: 9,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 10,
        quote: "It's better to be a warrior in a garden, than a gardener in a war"  
    },
    {
        id: 11,
        quote: "Don’t wait for others to bring the change. Be the change and bring the change"  
    },
    {
        id: 12,
        quote: "Be the change that you wish to see in the world"  
    },
    {
        id: 13,
        quote: "Spread love everywhere you go"  
    },
    {
        id: 14,
        quote: "Life is really simple, but we insist on making it complicated"  
    },
    {
        id: 15,
        quote: "Start where you are. Use what you have. Do what you can"  
    },
    {
        id: 16,
        quote: "It does not matter how slowly you go, so long as you do not stop"  
    },
    {
        id: 17,
        quote: "If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe"  
    },
    {
        id: 18,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 19,
        quote: "Motivation is what gets you started. Habit is what keeps you going"  
    },
    {
        id: 20,
        quote: "Opportunities don’t happen, you create them"  
    },
    {
      id: 0,
      quote: 'Love is very beautiful ... so what if it brings a little bit of pain with it'
    },
    {
      id: 1,
      quote: "One should love you, the way you are ... if someone tries to change you in love, then its not love but a compromise ... and darling, one doesn't compromise in love"  
    },
    {
        id: 3,
        quote: "Not everyone has the same heart as you"
    },
    {
        id: 4,
        quote: "No response is a response"  
    },
    {
        id: 5,
        quote: "Revenge will not bring you peace, only death"
    },
    {
        id: 6,
        quote: "Land and silver is what all men desire"  
    },
    {
        id: 7,
        "quote": "Whether you think you can or you think you can’t, you’re right"
    },
    {
        id: 8,
        quote: "The opposite of love is not hate; it’s indifference"  
    },
    {
        id: 9,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 10,
        quote: "It's better to be a warrior in a garden, than a gardener in a war"  
    },
    {
        id: 11,
        quote: "Don’t wait for others to bring the change. Be the change and bring the change"  
    },
    {
        id: 12,
        quote: "Be the change that you wish to see in the world"  
    },
    {
        id: 13,
        quote: "Spread love everywhere you go"  
    },
    {
        id: 14,
        quote: "Life is really simple, but we insist on making it complicated"  
    },
    {
        id: 15,
        quote: "Start where you are. Use what you have. Do what you can"  
    },
    {
        id: 16,
        quote: "It does not matter how slowly you go, so long as you do not stop"  
    },
    {
        id: 17,
        quote: "If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe"  
    },
    {
        id: 18,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 19,
        quote: "Motivation is what gets you started. Habit is what keeps you going"  
    },
    {
        id: 20,
        quote: "Opportunities don’t happen, you create them"  
    },
    {
      id: 0,
      quote: 'Love is very beautiful ... so what if it brings a little bit of pain with it'
    },
    {
      id: 1,
      quote: "One should love you, the way you are ... if someone tries to change you in love, then its not love but a compromise ... and darling, one doesn't compromise in love"  
    },
    {
        id: 3,
        quote: "Not everyone has the same heart as you"
    },
    {
        id: 4,
        quote: "No response is a response"  
    },
    {
        id: 5,
        quote: "Revenge will not bring you peace, only death"
    },
    {
        id: 6,
        quote: "Land and silver is what all men desire"  
    },
    {
        id: 7,
        "quote": "Whether you think you can or you think you can’t, you’re right"
    },
    {
        id: 8,
        quote: "The opposite of love is not hate; it’s indifference"  
    },
    {
        id: 9,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 10,
        quote: "It's better to be a warrior in a garden, than a gardener in a war"  
    },
    {
        id: 11,
        quote: "Don’t wait for others to bring the change. Be the change and bring the change"  
    },
    {
        id: 12,
        quote: "Be the change that you wish to see in the world"  
    },
    {
        id: 13,
        quote: "Spread love everywhere you go"  
    },
    {
        id: 14,
        quote: "Life is really simple, but we insist on making it complicated"  
    },
    {
        id: 15,
        quote: "Start where you are. Use what you have. Do what you can"  
    },
    {
        id: 16,
        quote: "It does not matter how slowly you go, so long as you do not stop"  
    },
    {
        id: 17,
        quote: "If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe"  
    },
    {
        id: 18,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 19,
        quote: "Motivation is what gets you started. Habit is what keeps you going"  
    },
    {
        id: 20,
        quote: "Opportunities don’t happen, you create them"  
    },
    {
      id: 0,
      quote: 'Love is very beautiful ... so what if it brings a little bit of pain with it'
    },
    {
      id: 1,
      quote: "One should love you, the way you are ... if someone tries to change you in love, then its not love but a compromise ... and darling, one doesn't compromise in love"  
    },
    {
        id: 3,
        quote: "Not everyone has the same heart as you"
    },
    {
        id: 4,
        quote: "No response is a response"  
    },
    {
        id: 5,
        quote: "Revenge will not bring you peace, only death"
    },
    {
        id: 6,
        quote: "Land and silver is what all men desire"  
    },
    {
        id: 7,
        "quote": "Whether you think you can or you think you can’t, you’re right"
    },
    {
        id: 8,
        quote: "The opposite of love is not hate; it’s indifference"  
    },
    {
        id: 9,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 10,
        quote: "It's better to be a warrior in a garden, than a gardener in a war"  
    },
    {
        id: 11,
        quote: "Don’t wait for others to bring the change. Be the change and bring the change"  
    },
    {
        id: 12,
        quote: "Be the change that you wish to see in the world"  
    },
    {
        id: 13,
        quote: "Spread love everywhere you go"  
    },
    {
        id: 14,
        quote: "Life is really simple, but we insist on making it complicated"  
    },
    {
        id: 15,
        quote: "Start where you are. Use what you have. Do what you can"  
    },
    {
        id: 16,
        quote: "It does not matter how slowly you go, so long as you do not stop"  
    },
    {
        id: 17,
        quote: "If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe"  
    },
    {
        id: 18,
        quote: "Whoever is happy will make others happy too"  
    },
    {
        id: 19,
        quote: "Motivation is what gets you started. Habit is what keeps you going"  
    },
    {
        id: 20,
        quote: "Opportunities don’t happen, you create them"  
    },
  ] 

  
  
  return (
    <View style={styles.container} >
      {/* <Image source={logo} style={styles.logo} /> */}
      <View style={styles.quoteContainer}> 
        <Text style={styles.quote}>{quotes[num]['quote']}</Text>
      </View>

      <TouchableOpcaity style={styles.button} onPress={() => {num == quotes.length ? setNum(0) : setNum(num + 1) }}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpcaity>
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
  quoteContainer:{
    borderRadius: 2,
    borderWidth: 1,
    // paddingVertical: 90,
    paddingHorizontal: 16,
    marginHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 380,
  },
  quote: {
    color: '#888', 
    fontSize: 24,
    // marginHorizontal: 15,
    fontFamily: 'American Typewriter',
    lineHeight: 34,
    // marginTop: 170
  },
  button: {
    backgroundColor: '#4353FF',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    // marginTop: 100
  },
  buttonText:{
    fontSize: 20,
    color: '#fff'
  },


})