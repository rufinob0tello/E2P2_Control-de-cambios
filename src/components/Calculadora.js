import React, {useState} from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

export default function Calculadora (){
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState('');

    const sumar = () =>{
        const res = parseFloat(valor1) + parseFloat(valor2);
        setResultado(res.toString());
    }

    const restar = () =>{
        const res = parseFloat(valor1) - parseFloat(valor2);
        setResultado(res.toString());
    }

    const multiplicar = () =>{
        const res = parseFloat(valor1) * parseFloat(valor2);
        setResultado(res.toString());
    }

    const dividir = () =>{
        if(parseFloat(valor2) === 0){
            setResultado('Sintax Error, No dividas por cero wey')
        }else{
            const res = parseFloat(valor1) / parseFloat(valor2);
            setResultado(res.toString());
        }
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Valor1"
            keyboardType="numeric"
            valuer={valor1}
            onChangeText={setValor1}
            ></TextInput>
            <TextInput style={styles.input}
            placeholder="Valor2"
            keyboardType="numeric"
            valuer={valor2}
            onChangeText={setValor2}
            ></TextInput>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={sumar}>
                    <Text style={styles.buttonText}>Sumar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={restar}>
                    <Text style={styles.buttonText}>Restar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={multiplicar}>
                    <Text style={styles.buttonText}>Multiplicar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={dividir}>
                    <Text style={styles.buttonText}>Dividir</Text>
                </TouchableOpacity>

            </View>
            <Text style = {styles.resultado}>Resultado: {resultado}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10
    },
    button:{
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})