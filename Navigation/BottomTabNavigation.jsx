import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Profile, Search, ProductDetails, Cart} from "../index.js"
 import { COLORS } from '../constants/theme.js'
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

const screenOptions = {
tabBarShowLabel:false,
tabBarHideOnKeyBoard: true,
headerShown:false,
tabBarStyle:{
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    height: 70,
    elevation:0
}

}
const BottomTabNavigation = () => {

  return (
  <Tab.Navigator screenOptions={ screenOptions }>
    <Tab.Screen
    name="Home"
    component={Home}
    options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons 
            name = {focused ? "home" : "home-outline"}
            size={24}
            color = {focused ? COLORS.primary : COLORS.gray2 }
            />
        }
    } 
    }
    />
    <Tab.Screen
    name="search"
    component={Search}
    options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons 
            name ="search-sharp"
            size={24}
            color = {focused ? COLORS.primary : COLORS.gray2 }
            />
        }
    } 
    }
    />
    <Tab.Screen
    name="profile"
    component={Profile}
    options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons 
            name = {focused ? "person" : "person-outline"}
            size={24}
            color = {focused ? COLORS.primary : COLORS.gray2 }
            />
        }
    } 
    }
    />

  </Tab.Navigator>
  )
}

export default BottomTabNavigation