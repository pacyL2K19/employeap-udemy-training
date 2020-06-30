import React from 'react'
import { StyleSheet, Text, View , Image, FlatList} from 'react-native'
import { Card, FAB } from 'react-native-paper'

const Home = () => {
    const data = [
        {id : 1, name : 'Pacifique', position : 'Team manager'},
        {id : 2, name : 'Cedigola', position : 'ML expert'},
        {id : 3, name : 'Adkif', position : 'Backend dev'},
        {id : 4, name : 'John Z', position : 'Frontend dev'},
        {id : 5, name : 'Dav M', position : 'Devopps'},
        {id : 6, name : 'Luc G', position : 'Hiring manager'},
        {id : 7, name : 'Wellah V', position : 'SEO'},
        {id : 8, name : 'Chris L', position : 'Teacher'},
        {id : 9, name : 'Mickren N', position : 'iOT learner'}
    ]
    const renderList = ((item) => {
        return (
            <Card style = { styles.myCard }>
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
        <Vew>
            <FlatList 
                data = {data}
                keyExtractor = {(item) => {item.toString()}}
                renderItem = {({item}) => {
                    return renderList(item)
                }}
            />
            <FAB 
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{ colors : {accent : "#006aff"}}}
                onPress = {() => {console.log('Pressed')}}
            />
        </Vew>
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
    }
})

export default Home