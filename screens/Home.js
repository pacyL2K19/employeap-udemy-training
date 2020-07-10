import React from 'react'
import { StyleSheet, Text, View , Image, FlatList} from 'react-native'
import { Card, FAB } from 'react-native-paper'
import { NavigationHelpersContext } from '@react-navigation/native'

const Home = ({navigation}) => {
    const data = [
        {_id : 1, name : 'Pacifique', email : 'abc@abc.cke', salary : '$100k', phone : '12345',position : 'Team manager', picture : 'https://images.unsplash.com/photo-1587890271791-6fc0d1fe7537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80'},
        {_id : 2, name : 'Cedigola', email : 'fhkj@abc.cke', salary : '$55k', phone : '8329',position : 'Game dev', picture : 'https://images.unsplash.com/photo-1587890271791-6fc0d1fe7537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80'},
        {_id : 3, name : 'Adkif K', email : 'iwm@abc.cke', salary : '$55k', phone : '9300',position : 'ML expert ', picture : 'https://images.unsplash.com/photo-1587890271791-6fc0d1fe7537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80'},
    ]
    const renderList = ((item) => {
        return (
            <Card style = { styles.myCard } onPress = {() => navigation.navigate('Profile', {item})}>
                <View style = { styles.viewCard}> 
                    <Image 
                        style = {{ height : 60, width : 60, borderRadius : 30}}
                        source = {{ uri : "https://images.unsplash.com/photo-1587890271791-6fc0d1fe7537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80"}}
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