import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function RecuperarContrasena() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../Navegacion/img_fondo.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Productos</Text>
                <TextInput placeholder='Nombre producto' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Código producto' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Cantidad' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Fecha caducidad' style={styles.txtInput}></TextInput>

                <TouchableOpacity 
                    onPress={() => navigation.navigate("Login")}>
                    <LinearGradient
                        colors={['#00C1BB', '#005B58']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLogin}>Guardar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        marginRight: 170,
        marginBottom: 0,
    },
    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        alignItems: "center",
    },
    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
});

