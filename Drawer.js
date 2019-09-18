import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import Drawer from 'react-native-drawer'
import SideBar from './app/components/Side_bar'

export default class Application extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                openDrawerOffset={0.15}
                styles={drawerStyles}
                negotiatePan={true}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={<SideBar/>}
            >
                <SafeAreaView>
                    <Button
                        title="Press me"
                        onPress={() => this.openControlPanel()}
                    />
                </SafeAreaView>
            </Drawer>
        )
    }
}

const drawerStyles = {
    drawer: { backgroundColor: '#2B3046', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});