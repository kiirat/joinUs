import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
      };
    render() {
        return (
            <ImageBackground
                source={require('../assets/images/backgrounds/home-bg.jpg')} style={{ flex: 1, alignItems: "center" }}>
                <Image
                    style={styles.thumbs}
                    source={require('../assets/images/thumbs/user.png')} />
                <Text style={styles.userName}>MOURAD</Text>
                <View style={styles.action}>
                    <TouchableOpacity style={styles.likes}>
                        <Image source={require('../assets/images/icons/icon-like.png')} />
                        <Text style={{ color: '#ffffff', fontSize: 15, marginLeft: 7 }}>234</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTransparent}>
                        <Text style={{ fontSize: 18, color: '#ffcb00', fontWeight: 600 }}>Live Video</Text>
                        <Image source={require('../assets/images/icons/icon-arrow.png')}
                            style={{ width: 18, height: 14, marginLeft: 8 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.comments}>
                        <Image source={require('../assets/images/icons/icon-comment.png')} />
                        <Text style={{ color: '#ffffff', fontSize: 15, marginLeft: 7 }}>81</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    thumbs: {
        width: 187,
        height: 192,
        marginTop: 80
    },
    userName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    action: {
        flexDirection: 'row',
        marginTop: 80
    },
    btnTransparent: {
        width: 170,
        height: 50,
        borderWidth: 1,
        borderColor: '#45db5e',
        borderRadius: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    comments: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    }


});
