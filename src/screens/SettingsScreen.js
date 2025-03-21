import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

export default function SettingsScreen(props){
    const {navigation} = props;

   const goToHome = () =>{
    navigation.navigate("Home");
   }
    return(
        <SafeAreaView>
            <Text>Estamos en SettingsScreen</Text>

            <Button onPress={goToHome} title = "Regresar a inicio"/>
        </SafeAreaView>
    )
}