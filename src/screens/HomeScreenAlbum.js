import { setStatusBarBackgroundColor } from "expo-status-bar"; 
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";

const albums = [
    {
        id: 1,
        title: 'Minutes to Midnight',
        description: 'Minutes to Midnight es el tercer álbum de estudio de la banda de rock estadounidense Linkin Park, lanzado el 14 de mayo de 2007 a través de Warner Bros. Records.',
        rating: 10,
        image : 'https://frozen-records.com/cdn/shop/files/16059174-08414969636de3a95d5bc636de3a95d5be1668146089636de3a95d5bf.jpg?v=1725195482',
    },
    {
        id: 2,
        title: 'Neotheater',
        description: 'Lanzamiento 2019 de la banda indie pop. Neotheater es el muy esperado álbum de seguimiento de AJR a The Click (2017). AJR está compuesto por los hermanos multiinstrumentalistas Adam, Jack y Ryan Met. La banda es un grupo pop DIY que escribe, produce y mezcla su propio material en la sala de estar de su departamento Chelsea. Su estilo musical ha sido descrito como "eléctrico", combinando elementos de pop, doo-wop, electrónica y dubstep.',
        rating: 10,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KGqrLHyFe6nzXHyx5qW-f9cuxH1hV2TPZ7oDKocRS0nDWRm5AHK2OQle5JXIqjG_zy4&usqp=CAU',
    },
    {
        id: 3,
        title: 'The Click (Deluxe Edition)',
        description: 'El segundo álbum de larga duración de AJR, The Click de 2017, presenta más del ecléctico pop de Nueva York. Viniendo dos años después del álbum debut del grupo, Living Room 2015, The Click incluye las cinco canciones de su bien recibido EP 2015, What Everyones Thinking. También se incluyen ocho originales recién escritos. Destacado es el flotante, teñido electrónico individual "Débil". ~ Cuello mate',
        rating: 10,
        image : 'x%3Des-es&docid=_ZHJ83S3rwzu2M&tbnid=86P4OS8aPjUbtM&vet=12ahUKEwjKsb_d8ISMAxWR8MkDHXztNFEQM3oECBcQAA..i&w=1006&h=1008&hcb=2&itg=1&ved=2ahUKEwjKsb_d8ISMAxWR8MkDHXztNFEQM3oECBcQAA',
    },
    {
        id: 4,
        title: 'From Zero',
        description: 'From Zero is the eighth studio album by American rock band Linkin Park. It was released on November 15, 2024',
        rating: 10,
        image : 'https://www.google.com/imgres?q=album%20From%20Zero&imgurl=https%3A%2F%2Fresources.claroshop.com%2Fmedios-plazavip%2Ffotos%2Fproductos_sears1%2Foriginal%2F4557182.jpg&imgrefurl=https%3A%2F%2Fwww.sears.com.mx%2Fproducto%2F3430477%2Fcd-linkin-park-from-zero&docid=a799uIL7C_OeDM&tbnid=y8jHf5EWgKIcAM&vet=12ahUKEwiJvYfu8YSMAxWv78kDHQAPMHUQM3oECBYQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwiJvYfu8YSMAxWv78kDHQAPMHUQM3oECBYQAA',
    },
    {
        id: 5,
        title: 'That´s The Spirit',
        description: 'That’s The Spirit es un estimulante álbum de 11 canciones, lleno de grandes riffs, voces crecientes y pistas monstruosas que llenan estadios. El álbum, el cual Oli Sykes describe en NME como “una celebración de la depresión,” fue grabado esta primavera en Santorini, Grecia en los estudios Black Rock, los cuales descubrieron en Google buscando “los estudios más sorprendentes del mundo”. That’s The Spirit fue mezclado en Londres, masterizado en Nueva York y producido por Sykes y Jordan Fish. El disco ya está disponible en México en Formato Digital y estará a la venta en CD a partir del 26 de Febrero. Bring Me The Horizon está formada por Oli Sykes (voz), Matthew Nicholls (batería), Matt Kean (bajo), Lee Malia (guitarra), Jordan Fish (programación y teclados).',
        rating: 10,
        image : 'https://www.google.com/imgres?q=album%20that%27s%20the%20spirit&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273413697269620e16f4466f543&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-es%2Falbum%2F7FqHuAvmREiIwVXVpZ9ooP&docid=kOCAUJZ5j-0IJM&tbnid=7cPZEbN2FyKRhM&vet=12ahUKEwjay43b8oSMAxVM8MkDHYC1KP0QM3oECBkQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjay43b8oSMAxVM8MkDHYC1KP0QM3oECBkQAA',
    }
];

export default function HomeScreen({ navigation }) {
    const renderAlbum = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AlbumDetail', { album: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={albums}
                renderItem={renderAlbum}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    card: {
        marginBottom: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: 150
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    }
});
