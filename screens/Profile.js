import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

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
            <View style = {{ alignItems : 'center', margin : 15}}>
                <Title>
                    Pacifique LINJANJA
                </Title>
                <Text style = {{ fontSize : 15 }}> CEO </Text>
            </View>
            <Card>
                <View>
                    <MaterialIcons name = 'email' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> paci@linja.com </Text>
                </View>
            </Card>
            <Card>
                <View>
                    <Entypo name = 'phone' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> 090909939</Text>
                </View>
            </Card>
            <Card>
                <View>
                    <MaterialIcons name = 'attach-money' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> 100K$ </Text>
                </View>
            </Card>
            <View style={{ flexDirection : 'row', justifyContent: 'space-around', padding : 10}}> 
                <Button 
                    icon = 'account-edit'
                    mode = 'contained' 
                    theme = {theme}
                    onPress = {() => console.log('Pressed')}
                >
                    Edit
                </Button>
                <Button 
                    icon = 'delete'
                    mode = 'contained' 
                    theme = {theme}
                    onPress = {() => console.log('Pressed')}
                >
                    Fire employee
                </Button>
            </View>
        </View>
    )
}

const theme = {
    colors : {
        primary : '#006aff'
    }
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
    },
    myCard : {
        margin : 3
    },
    cardContent : {
        flexDirection : 'row',
        padding : 8
    },
    myText : {
        fontSize : 18
    }
})

export default Profile 