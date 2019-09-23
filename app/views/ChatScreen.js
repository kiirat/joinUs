
import React from 'react'
import {SafeAreaView,Text, StyleSheet, View,TouchableOpacity} from 'react-native'
import Rooms from '../components/Rooms'



export default class ChatScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.wraper}>
                    <SafeAreaView styles={styles.headerWrap}>
                        <View style={styles.titleWrap}>
                            <Text style={styles.title}>Friends</Text>
                        </View>
                        <View style={styles.groupBtn}>

                            <TouchableOpacity style={[styles.btn, styles.btnActive, {borderTopLeftRadius: 5,borderBottomLeftRadius: 5}]}>
                                <Text style={styles.btnText}>Latests</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.btn,{marginRight: 1}]}>
                                <Text style={styles.btnText}>Favorites</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.btn,{borderTopRightRadius: 5,borderBottomRightRadius: 5}]}>
                                <Text style={styles.btnText}>All</Text>
                            </TouchableOpacity>

                        </View>
                    </SafeAreaView>
                </View>
                <Rooms />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    wraper: {
        backgroundColor: '#7892e3',
        paddingBottom: 18
    },
    titleWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
        
    },
    headerWrap: {
        flex: 1,
        flexDirection: 'row',
    },
    groupBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18
    },
    btn: {
        flex: .28,
        height: 49,
        backgroundColor: '#6179bf',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 3,
    },
    btnActive: {
        backgroundColor: '#5769a4',
    },
    btnText:{
        color: 'white',
        fontSize: 15,
        fontWeight: "500"
    },
    title:{
        color: 'white',
        fontSize: 17,
        fontWeight: "500"
    }
});