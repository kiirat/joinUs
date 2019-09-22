import React from 'react'
import {
    TouchableHighlight,
    TextInput,
    Image,
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Text
} from 'react-native'

import axios from 'axios';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        state = {
            email    : 'test.test@gmail.com',
            password : 'OUssama1996',
        }
    }

    Login() {
        console.log('sign Up')
        axios.post('http://localhost:3000/api/users/login', {
            email: this.state.email,
            password: this.state.password,
        })
        .then(response => {
            this.props.navigation.navigate('Home')
        })
        .catch(error => {
                if (error instanceof Error) {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.response.data);
                } else {
                    // The request was made, but the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.data);
                    console.log(error.status);
                    console.log(error.headers);
                    console.log(error.config);
                }
            })
    }

    render(props) {
        return (
            <ImageBackground
                source={require('../assets/images/backgrounds/home-bg.jpg')} style={{ flex: 1, alignItems: "center" }}>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/email/ultraviolet/50/3498db' }} />
                            <TextInput style={styles.inputs}
                                placeholder="Email"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/password/ultraviolet/50/3498db' }} />
                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.Login()}>
                            <Text style={styles.signUpText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: 'white',
    }
});