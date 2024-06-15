import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Navegacion/Login"
import RegistrarProducto from "./Navegacion/RegistrarProducto";
import RegistrarUsuario from "./Navegacion/RegistrarUsuario";


const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="Login">



    <Stack.Screen name="Principal" component={Login}/>

    <Stack.Screen name="RegistrarProducto" component={RegistrarProducto}/>

    <Stack.Screen name="RegistrarUsuario" component={RegistrarUsuario}/>

    </Stack.Navigator> 
)}

const TabNav = createBottomTabNavigator();

function Tabs() {
    return (
        <TabNav.Navigator
           // initialRouteName="Home"
           // screenOptions={{
           //     tabBarActiveTintColor: 'green', }} 
            >

            <TabNav.Screen 
            name="Home" 
            component={Stacks}
            options={{
                tabBarLabel: 'Home', //se utiliza para asignar nombre a la opción del botón
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                ),
                tabBarBadge: 3, //se utiliza para las notificaciones
                headerShown: false, //oculta el header
            }}/>

            {/*<TabNav.Screen name="Home2" component={Home2}/> */}
            
        </TabNav.Navigator>
    )
}

export default function Navegacion() {
    return( 

        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>

      );
}