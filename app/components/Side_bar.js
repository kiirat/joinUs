import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'


export default class SideBare extends Component {

    render() {
        return (
            <SafeAreaView >
                <View style={styles.container}>
                    <View style={styles.avatar_container}>
                        <Image
                            style={styles.avatar}
                            source={require('../assets/images/avatar.png')}
                        />
                        <View><Text style={styles.profile_name}>Twanda Keaton</Text></View>
                    </View>

                    <View style={styles.list_container} >
                        <TouchableOpacity style={styles.list_item_container}><Text style={styles.list_item}>Worldwide</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.list_item_container}><Text style={styles.list_item}>Trending</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.list_item_container}><Text style={styles.list_item}>People</Text></TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 16,
        flexDirection: 'column'
    },
    avatar_container:{  
        borderRadius:10,
        alignItems:'center'
    },
    avatar: {
        borderRadius:80,
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    profile_name:{
        color:'#7897E0', 
        fontSize:25, 
        marginTop:20,
        fontWeight: '200'
    },
   list_container:{  
        marginTop:30,
        flexDirection:'column',
        alignItems:'stretch'
    },
    list_item_container:{
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10
    },
    list_item:{
        color:"white",
        fontSize:25,
        fontStyle:'normal',
        fontWeight:'100'
    }
})