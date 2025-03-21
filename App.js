import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationAlbum from './src/navigation/NavigationAlbum';
import Conversion from './src/components/Conversion';

export default function App() {
  return (

    <Conversion/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center',

  },
})