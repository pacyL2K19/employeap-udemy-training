import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Modal,
    Alert,
} from 'react-native'
import { TextInput, Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'
const CreateEmployee = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [position, setPosition] = useState('')
    const [picture, setPicture] = useState('')
    const [modal, setModal] = useState(false)

    const submitData = ({navigation}) => {
        fetch ('http://localhost:3000/send-data', {
            method : 'POST',
            headers : {
                'Content-Type' : 'app/json'
            },
            body : JSON.stringify({
                ame ,
                email,
                phone,
                salary,
                position,
                picture
            })
        })
            .then((res) => res.json())
            .then(data => {
                Alert.alert(`${data.name} is saved successfully`)
                navigation.navigate('Home')
            })
            .catch(err => {
                Alert.alert('Error while uploading files')
            })
    }

    const pickFromGallery = async () => {
        const {granted} = await Permission.askAsync(Permission.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                aspect : [1,1],
                quality : 0.5
            })
            console.log(data)
        } else {
            Alert.alert('You need to give up permission')
        }
    }

    const pickFromCamera = async () => {
        const {granted} = await Permission.askAsync(Permission.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                aspect : [1,1],
                quality : 0.5
            })
            if (!data.cancelled) {
                let newFile = { 
                    uri : data.uri, 
                    type : `test/${data.uri.split('.')[1]}`, 
                    name :`text.${data.uri.split('.')[1]}` // the unique name has to be set automatically by cloudinary 
                }
                handleUpload (newFile)
            }
        } else {
            Alert.alert('You need to give up permission')
        }
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'employeeApp')
        data.append('cloud_name', 'pacyl20')
        fetch ('https://api.cloudinary.com/v1_1/pacyl20/image/upload', {
            method : 'post',
            body : data
        })
            .then (res => res.json())
            .then (data => {
                setPicture(data.url)
                setModal (false)
            })
    }

    return (
        <View style = {styles.root}>
            
            <TextInput 
                label = 'Name'
                value = {name}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setName(text)}
            />
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
            <TextInput 
                label = 'Position'
                value = {position}
                style = {styles.input}
                mode = 'outlined'
                theme = {theme}
                onChangeText = {(text) => setPosition(text)}
            />
            <Button
                icon = {picture == '' ? 'upload' : 'check'}
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
                transparent = {true}
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
                            onPress = {() => pickFromCamera ()}
                        >
                            Camera
                        </Button>
                        <Button
                            icon = 'image-area'
                            mode = 'contained'
                            theme = {theme}
                            onPress = {() => pickFromGallery ()}
                        >
                            Gallery
                        </Button>
                    </View>
                    <Button
                        theme = {theme}
                        onPress = {() => setModal(false)}
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

const styles = StyleSheet.create({
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