import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { Card } from 'react-native-paper'

const Home = () => {
    const data = [
        {id : 1, name : 'Pacifique', position : 'Team manager'},
        {id : 2, name : 'Cedigola', position : 'ML expert'},
        {id : 3, name : 'Pacifique', position : 'Backend dev'},
        {id : 4, name : 'Pacifique', position : 'Frontend dev'},
        {id : 5, name : 'Pacifique', position : 'Devopps'},
        {id : 6, name : 'Pacifique', position : 'Hiring manager'},
        {id : 7, name : 'Pacifique', position : 'SEO'},
        {id : 8, name : 'Pacifique', position : 'Teacher'},
        {id : 9, name : 'Pacifique', position : 'iOT learner'}
    ]
    const 
    return (
        <Card style = { styles.myCard }>
            <View style = { styles.viewCard}> 
                <Image 
                    style = {{ height : 60, width : 60, borderRadius : 30}}
                    source = {{ uri : "https://images.unsplash.com/photo-1587890271791-6fc0d1fe7537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80"}}
                />
                <Text>Hello from home</Text>
            </View>
        </Card>
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
    }
})

export default Home