
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './Navigation/BottomTabNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  console.log("ran1")
  const Stack = createNativeStackNavigator()


  return (
     <SafeAreaProvider>
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="BottomTabNavigation"
      component={BottomTabNavigation}
      options={{
        headerShown: false
      }}

      />

      </Stack.Navigator>
    </NavigationContainer>
 </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "ExtraBold"
  },
  text:{
    fontFamily:"ExtraBold",
  }
});
