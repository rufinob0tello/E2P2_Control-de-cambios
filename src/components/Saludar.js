import React from "react";
import {Text, StyleSheet} from "react-native";
import propTypes from "prop-types";

export default function Saludar (props){
    const {firstname, lastname} = props;


    return(
        //<Text style={styles.text}>"Rufino Botello Santos"</Text>
        <Text style={styles.text}>Hola {firstname}, {lastname}</Text>
    )
}

Saludar.defaultProps = {
    firstname: "Linkin",
    lastname: "Park"
}

Saludar.propTypes = {
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired
}

const styles = StyleSheet.create({
    text: {
      fontSize: 40, 
      fontWeight: "bold",
      marginTop: 5,
      backgroundColor: 'EA899A',
    },
  });