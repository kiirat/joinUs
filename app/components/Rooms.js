import React from 'react'
import {SafeAreaView,Text,ScrollView , View, StyleSheet, Image} from 'react-native'


export default class Rooms extends React.Component{
    render(){
        return(
            <ScrollView styles={styles.container}>
                <View style={{flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.thumb}>
                            <Image 
                                style={styles.thumbsImg} 
                                source={require('../assets/images/thumbs/profile.png')}
                            />
                            <Image 
                                style={styles.label} 
                                source={require('../assets/images/icons/label_round.png')}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Johnny Colclough</Text>
                            <View style={styles.userLocation}>
                                <Image 
                                    style={styles.locationIcon} 
                                    source={require('../assets/images/icons/icon-location.png')}
                                />
                                <Text style={{fontSize: 13, color: '#4d606f'}}>Amsterdam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}>
                        <Image 
                            style={{flex: .7}} 
                                source={require('../assets/images/icons/separator.png')}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.thumb}>
                            <Image 
                                style={styles.thumbsImg} 
                                source={require('../assets/images/thumbs/profile.png')}
                            />
                            <Image 
                                style={styles.label} 
                                source={require('../assets/images/icons/label_round-red.png')}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Johnny Colclough</Text>
                            <View style={styles.userLocation}>
                                <Image 
                                    style={styles.locationIcon} 
                                    source={require('../assets/images/icons/icon-location.png')}
                                />
                                <Text style={{fontSize: 13, color: '#4d606f'}}>Amsterdam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}>
                        <Image 
                            style={{flex: .7}} 
                                source={require('../assets/images/icons/separator.png')}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.thumb}>
                            <Image 
                                style={styles.thumbsImg} 
                                source={require('../assets/images/thumbs/profile.png')}
                            />
                            <Image 
                                style={styles.label} 
                                source={require('../assets/images/icons/label_round-red.png')}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Johnny Colclough</Text>
                            <View style={styles.userLocation}>
                                <Image 
                                    style={styles.locationIcon} 
                                    source={require('../assets/images/icons/icon-location.png')}
                                />
                                <Text style={{fontSize: 13, color: '#4d606f'}}>Amsterdam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}>
                        <Image 
                            style={{flex: .7}} 
                                source={require('../assets/images/icons/separator.png')}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.thumb}>
                            <Image 
                                style={styles.thumbsImg} 
                                source={require('../assets/images/thumbs/profile.png')}
                            />
                            <Image 
                                style={styles.label} 
                                source={require('../assets/images/icons/label_round.png')}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Johnny Colclough</Text>
                            <View style={styles.userLocation}>
                                <Image 
                                    style={styles.locationIcon} 
                                    source={require('../assets/images/icons/icon-location.png')}
                                />
                                <Text style={{fontSize: 13, color: '#4d606f'}}>Amsterdam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}>
                        <Image 
                            style={{flex: .7}} 
                                source={require('../assets/images/icons/separator.png')}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.thumb}>
                            <Image 
                                style={styles.thumbsImg} 
                                source={require('../assets/images/thumbs/profile.png')}
                            />
                            <Image 
                                style={styles.label} 
                                source={require('../assets/images/icons/label_round.png')}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Johnny Colclough</Text>
                            <View style={styles.userLocation}>
                                <Image 
                                    style={styles.locationIcon} 
                                    source={require('../assets/images/icons/icon-location.png')}
                                />
                                <Text style={{fontSize: 13, color: '#4d606f'}}>Amsterdam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}>
                        <Image 
                            style={{flex: .7}} 
                                source={require('../assets/images/icons/separator.png')}
                        />
                    </View>
                </View>
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        
    },
    wrapper: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        marginLeft: 30
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 20,
    },
    thumbsImg: {
        width: 70,
        height: 70,
    },
    userName: {
        color: '#21262c',
        fontSize: 18
    },
    userLocation: {
        flexDirection: 'row',
        marginTop: 10
    },
    locationIcon: {
        width: 10,
        height: 14,
        marginRight: 6
    },
    separator :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 25
    },
    label: {
        position: 'absolute',
        top: 0,
        right: -15,
        width: 16,
        height: 13,
        resizeMode: 'contain'
    },
    thumb: {
        position: 'relative'
    }
})