import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Modal,
} from 'react-native'
import { TextInput, Button} from 'react-native-paper'

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
            <Button
                icon = 'upload'
                mode = 'contained'
                style = {styles.input}
                theme = {theme}
                onPress = {() => setModal(true)}
            >
                Upload image
            </Button>
            <Button
                icon = 'content-save'
                mode = 'contained'
                style = {styles.input}
                theme = {theme}
                onPress = {() => console.log('Saved')}
            >
                Save
            </Button>
            <Modal
                animationType = 'slide'
                transparent = {false}
                visible = {modal}
                onRequestClose = {() => {
                    setModal(false)
                }}
            >
                <View style = { styles.modalView }>
                    <View style = { styles.modalButtonView }>
                        <Button
                            icon = 'camera'
                            mode = 'contained'
                            theme = {theme}
                            onPress = {() => console.log('Pressed')}
                        >
                            Camera
                        </Button>
                        <Button
                            icon = 'image-area'
                            mode = 'contained'
                            theme = {theme}
                            onPress = {() => console.log('Pressed')}
                        >
                            Gallery
                        </Button>
                    </View>
                    <Button
                        theme = {theme}
                        onPress = {() => setModal(true)}
                    >
                        Cancel
                    </Button>
                </View>
                
            </Modal>
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
    },
    modalButtonView : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding: 10,
    },
    modalView : {
        position : 'absolute',
        bottom : 2,
        width : '100%',
        backgroundColor : 'white'
    }
})

export default CreateEmployee