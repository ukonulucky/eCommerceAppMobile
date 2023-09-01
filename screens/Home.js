import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';




const Home = () => {


  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Light: require("../assets/fonts/Poppins-Light.ttf"),
    ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Poppins-Bold.ttf")
  })
  

  
  const onLayoutRootView = useCallback(async() => {
  if(fontsLoaded){
  await  SplashScreen.hideAsync()
  console.log("lodaded")
  }
  }, [fontsLoaded])
  
  if(!fontsLoaded){
    console.log("not loaded")
  return null
  }
  
  return (
   <SafeAreaView>
     <View onLayout={onLayoutRootView}>
      <Text>Home</Text>
    </View>
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})