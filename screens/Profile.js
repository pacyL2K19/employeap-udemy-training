import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Linking,
    Platform,
    Alert
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = (props) => {
    const {_id, name, position, picture, phone, email, salary } = props.route.params.item
    const deleteEmployee = () => {
        fetch('http://localhost:3000/delete', {
            method : 'post',
            headers : {
                'Content-Type' : 'app/json'
            },
            body : JSON.stringify({
                id : _id
            })
        })
            .then(res => res.json())
            .then(() => {
                Alert.alert(`${deleteEmployee.name} deleted successfully`)
                props.navigation.navigate('Home')
            })
            .catch(err => {
                Alert.alert('Failed to remove employee, try again later')
            })
    }
    const openDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL('tel:'+phone)
        } else {
            Linking.openURL('telprompt:'+phone) 
        }
    }
    return (
        <View style = {styles.root}>
            <LinearGradient 
                colors = {['#0033ff', '#6bc1ff']}
                style = {{ height: '20%'}}
            />
            <View style = {{ alignItems: 'center'}}>
                <Image
                    style = {{width: 100, height: 100, borderRadius: 50, marginTop: -50}}
                    source = {{uri: picture }}
                />
            </View>
            <View style = {{ alignItems: 'center', margin: 15}}>
                <Title>
                    {name}
                </Title>
                <Text style = {{ fontSize: 15 }}> {position} </Text>
            </View>
            <Card 
                style = { styles.myCard} 
                onPress = {() => {
                    Linking.openURL(`mailto:${email}`)
                }}
            >
                <View>
                    <MaterialIcons name = 'email' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> {email} </Text>
                </View>
            </Card>
            <Card
                style = { styles.myCard} 
                onPress = {() => openDial ()}
            >
                <View>
                    <Entypo name = 'phone' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> {phone}</Text>
                </View>
            </Card>
            <Card
                style = { styles.myCard} 
            >
                <View>
                    <MaterialIcons name = 'attach-money' size = {32} color = '#006aff' />
                    <Text style = { styles.myText }> {salary} </Text>
                </View>
            </Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10}}> 
                <Button 
                    icon = 'account-edit'
                    mode = 'contained' 
                    theme = {theme}
                    onPress = {() => {
                        props.navigation.navigate('Create'),
                        {
                            _id, name, position, picture, phone, email, salary
                        }
                    }}
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
    colors: {
        primary: '#006aff'
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    myCard: {
        margin: 5,
        flexDirection: 'row',
        padding: 5
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    },
    myText: {
        fontSize: 18
    }
})

export default Profile 
