import react from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native"

export default function AlbumDetailScreen({route, navigation}) {
    const {album} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <Image source={{uri: album.image}} style={styles.image}/>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.description}>{album.description}</Text>
            <Text style={styles.rating}>{album.rating}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 16,
        marginBottom: 20
    },
    rating: {
        fontSize: 18,
        marginBottom: 20
    }
});