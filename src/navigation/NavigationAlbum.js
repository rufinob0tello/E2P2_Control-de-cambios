import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreenAlbum";
import AlbumDetailScreen from "../screens/DetailsScreenAlbum";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Albums">
            <Stack.Screen name="Albums" component={HomeScreen}/>
            <Stack.Screen name="AlbumDetail" component={AlbumDetailScreen}/>
        </Stack.Navigator>
    );
}