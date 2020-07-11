import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View , Image, FlatList, Alert} from 'react-native'
import { Card, FAB } from 'react-native-paper'

const Home = ({navigation}) => {
    const [data, setData] = useState([])
    const [loading, setLoad] = useState (true)
    const fetchData = () => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(results => {
                setData(results)
                setLoad('false')
            })
            .catch(err => {
                Alert.alert('Something went wrong')
            })
    }
    useEffect (() => {
        fetchData ()
    }, [])
    const renderList = ((item) => {
        return (
            <Card style = { styles.myCard } onPress = {() => navigation.navigate('Profile', {item})}>
                <View style = { styles.viewCard}> 
                    <Image 
                        style = {{ height : 60, width : 60, borderRadius : 30}}
                        source = {{ uri : item.picture}}
                    />
                    <View style = {{ marginLeft : 10}}>
                        <Text style = { styles.text }>{ item.name }</Text>
                        <Text style = { styles.text }>{ item.position }</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return (
        <View style = {{ flex : 1}}>
            
            <FlatList 
                data = {data}
                keyExtractor = {(item) => {item._id.toString()}}
                renderItem = {({item}) => {
                    return renderList(item)
                }}
                onRefresh = {}
                refreshing = {loading}
            />
            <FAB
                onPress = {() => navigation.navigate('Create') } 
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{ colors : {accent : "#006aff"}}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    myCard : {
        marginTop : 50,
        margin : 10
    },
    viewCard : {
        flexDirection : 'row',
        padding: 6,
    },
    text : {
        fontSize : 18
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home