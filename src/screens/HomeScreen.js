import React from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';

export default function HomeScreen(props){
   // console.log(props);
   const {navigation} = props;

   const goToSettings = () =>{
    navigation.navigate("Settings");
   }

    return(
        <SafeAreaView>
            <Text>Estamos en HomeScreen</Text>

            <Button onPress={goToSettings} title = "Ir a Ajustes"/>
        </SafeAreaView>
    )
}