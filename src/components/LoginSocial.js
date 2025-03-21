import React from "react";
import { TextInput, Button, View, Text, StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.text}>Social Media</Text>

      <TextInput placeholder="Name" />
      <Text style={styles.text}>Name</Text>

      <TextInput placeholder="LastName" />
      <Text style={styles.text}>LastName</Text>

      <TextInput placeholder="Age" />
      <Text style={styles.text}>Age</Text>

      <TextInput placeholder="Adress" />
      <Text style={styles.text}>Address</Text>

      <TextInput placeholder="Username" />
      <Text style={styles.text}>Username</Text>

      <TextInput placeholder="Password" secureTextEntry />
      <Text style={styles.text}>Password</Text>

      <Button title="Enviar" onPress={() => console.log("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20, 
    fontWeight: "bold",
    marginTop: 5,
    backgroundColor: 'EA899A',
  },
});



