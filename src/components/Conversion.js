import React, {useState} from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

export default function divisa (){
    const [valor1, setValor1] = useState('');
    const [resultado, setResultado] = useState('');
    //setResultado(res ? res.toFixed(2) : "0.00");

    const dolar = () =>{
        const res = parseFloat(valor1) * 0.049;
        setResultado(res.toString());
    }

    const euro = () =>{
        const res = parseFloat(valor1) * 0.047;
        setResultado(res.toString());
    }

    const canada = () =>{
        const res = parseFloat(valor1) * 0.070;
        setResultado(res.toString());
    }

    const hong = () =>{
        const res = parseFloat(valor1) * 0.38;
        setResultado(res.toString());
    }

    const franco = () =>{
        const res = parseFloat(valor1) * 0.044;
        setResultado(res.toString());
    }

    const libra = () =>{
        const res = parseFloat(valor1) * 0.039;
        setResultado(res.toString());
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Divisas</Text>
            <TextInput style={styles.input}
            placeholder="Ingrese cantidad en MXN"
            keyboardType="numeric"
            valuer={valor1}
            onChangeText={setValor1}
            ></TextInput>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#FF5733" }]} onPress={dolar}>
                    <Text style={styles.buttonText}>Dolar USA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#33FF57" }]} onPress={euro}>
                    <Text style={styles.buttonText}>Euro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#3399FF" }]} onPress={canada}>
                    <Text style={styles.buttonText}>Dolar Canada</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#FF33D1" }]} onPress={hong}>
                    <Text style={styles.buttonText}>Dolar Hong Kong</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#FFC300" }]} onPress={franco}>
                    <Text style={styles.buttonText}>Franco suizo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#8E44AD" }]} onPress={libra}>
                    <Text style={styles.buttonText}>Libra esterlina</Text>
                </TouchableOpacity>

            </View>
            <Text style = {styles.resultado}>Resultado: {resultado}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E2C",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    button: {
        width: "45%",
        padding: 15,
        borderRadius: 10,
        margin: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    resultado: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 20,
    },
});