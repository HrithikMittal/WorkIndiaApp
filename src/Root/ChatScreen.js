/* eslint-disable */
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        console.log(navigation, 'nav');
        return {
            // headerLeft: () => <View>
            //     <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={{ uri: navigation.getParam('details').name.dp }} />
            //     </View>,
            title: navigation.getParam('details').name,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            text: null,
            sentText: ['Lorem ipsum sit'],
        }
    }

    storeData = async (key) => {
        try {
            await AsyncStorage.setItem(key, 'read')
        } catch (e) {
            // saving error
        }
    }

    sendMessage = () => {
        var data = this.state.sentText
        data.push(
            this.state.message
        )
        this.setState({
            sentText: data,
            message: '',
        })
    }

    onChangeText = (text) => {
        this.setState({
            message: text,
        })
    }

    componentDidMount() {
        this.storeData(this.props.navigation.getParam('details').Id)
    }

    renderSentText = () => {
        let html = []
        this.state.sentText.forEach(element => {
            html.push(
                <View style={style.sentContainer}>
                    <Text style={style.sentText}>{element}</Text>
                </View>
            )
        });
        return html;
    }

    render() {
        return (
            <>
                <View style={style.body}>

                    <View>
                        <View style={style.sentContainer}>
                            <Text style={style.sentText}>Lorem ipsum color</Text>
                        </View>
                        <View style={style.sentContainer}>
                            <Text style={style.sentText}>Lorem ipsum</Text>
                        </View>
                        <View style={style.receiveContainer}>
                            <Text style={style.receiveText}>Lorem ipsum dolor sit amet consetetur sadipscing</Text>
                        </View>
                        <View style={style.sentContainer}>
                            <Text style={style.sentText}>Lorem ipsum dolor</Text>
                        </View>
                        <View style={style.sentContainer}>
                            <Text style={style.sentText}>Lorem ipsum</Text>
                        </View>
                        <View style={style.receiveContainer}>
                            <Text style={style.receiveText}>Lorem</Text>
                        </View>
                        <View style={style.sentContainer}>
                            <Text style={style.sentLinkText}>http://app.example.com/</Text>
                        </View>
                        {this.renderSentText()}
                    </View>

                    <View style={style.footer}>
                        <TouchableOpacity style={style.textInput}>
                            <Image style={style.icon} source={require('../smile.png')} />
                            <TextInput
                                onChangeText={text => this.onChangeText(text)}
                                placeholder="Type a message"
                                onSubmitEditing={this.sendMessage}
                                value={this.state.message}
                            />
                            <Image style={style.icon} source={require('../attach.png')} />
                            <Image style={style.icon} source={require('../photo.png')} />
                        </TouchableOpacity>
                        <View style={style.microphoneContainer}>
                            <Image style={style.icon} source={require('../microphone.png')} />
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

const style = StyleSheet.create(
    {
        body: {
            backgroundColor: '#D3D3D3',
            flex: 1,
        },
        receiveContainer: {
            width: 250,
            margin: 10,
            backgroundColor: '#FFFFFF',
            padding: 5,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
        },
        sentContainer: {
            alignSelf: 'flex-end',
            width: 250,
            margin: 10,
            backgroundColor: '#eaffc8',
            padding: 5,
            borderTopLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
        },
        sentText: {
            alignSelf: 'flex-end',
            fontSize: 16,
            fontWeight: '500',
        },
        receiveText: {
            fontSize: 16,
            fontWeight: '500',
        },
        sentLinkText: {
            alignSelf: 'flex-end',
            fontSize: 16,
            fontWeight: '500',
            color: '#0000FF'
        },
        footer: {
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
        textInput: {
            flex: .85,
            margin: 5,
            borderRadius: 20,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'center'
        },
        icon: {
            width: 20,
            height: 20,
            margin: 10,
        },
        microphoneContainer: {
            margin: 5,
            flex: .15,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#366056',
            alignItems: 'center',
        }
    }
)

export default ChatScreen;