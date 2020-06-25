import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { Card } from 'react-native-paper'

const Home = () => {
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
        margin : 5,
        padding : 5,
        flexDirection : 'row'
    },
   viewCard : {
        flexDirection : 'row'
    }
})

export default Home