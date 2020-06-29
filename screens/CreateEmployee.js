import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import { TextInput } from 'react-native-paper'

const CreateEmployee = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [picture, setPicture] = useState('')
    const [modal, setModal] = useState(false)

    return (
        <View style = {styles.root}>
            <TextInput 
                label = 'Email'
                value = {email}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setEmail(text)}
            />
            <TextInput 
                label = 'Phone'
                value = {phone}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setPhone(text)}
            />
            <TextInput 
                label = 'Salary'
                value = {salary}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setSalary(text)}
            />
            {/* <TextInput 
                label = 'Name'
                value = {name}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setName(text)}
            /> */}
        </View>
    )
}

const theme = {
    colors : {
        primary : '#006aff'
    }
}

const styles = StyleSheetList.create({
    root : {
        flex: 1
    },
    input : {
        margin : 5
    }
})

export default CreateEmployee