import React from 'react'
import {
    Text,
    View,
    StyleSheet,

} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar'

const Profile = () => {
    return (
        <View style = {styles.root}>
            <LinearGradient 
                colors = {['#0033ff', '#6bc1ff']}
                style = {{ height : '20%'}}
            />
            <View style = {{ alignItems :'center'}}>
                <Image
                    style = {{width : 100, height : 100, borderRadius : 50, marginTop : -50}}
                    source = {{uri :'https://unsplash.com/photos/y60Pux2HYk4' }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
    }
})

export default Profile 