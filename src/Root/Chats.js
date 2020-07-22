/* eslint-disable */
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "11:30PM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00PM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "8:25PM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "6:18PM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                }
            ],
            dataSource: [
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "11:30PM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00PM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "8:25PM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "6:18PM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 1,
                    "name": "Adhikansh Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=1",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 1
                },
                {
                    "Id": 2,
                    "name": "Hrithik Mittal",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                },
                {
                    "Id": 3,
                    "name": "kaushal Aggarwal",
                    "dp": "http://placeimg.com/100/100/people?id=3",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 2
                },
                {
                    "Id": 4,
                    "name": "Sudhanshu Mishra",
                    "dp": "http://placeimg.com/100/100/people?id=2",
                    "lastMsg": "Hey brother what's up?",
                    "stamp": "10:00AM",
                    "status": "read",
                    "countUnRead": 0
                }
            ],
        };
    }

    searchFilterFunction = text => {
        const newData = this.state.data.filter(item => {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            dataSource: newData,
            text: text,
        });
    };

    navigateToChatScreen = (item) => {
        this.props.navigation.navigate('ChatScreen', { details: item });
    }

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <SearchBar
                        value={this.state.text}
                        placeholder="Search Chats..."
                        lightTheme
                        onChangeText={text => this.searchFilterFunction(text)}
                        autoCorrect={false}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Item item={item} navigateToChatScreen={this.navigateToChatScreen} getData={this.getData} />}
                    />
                </View>
            </>
        )
    }
}

function Item(props) {
    return (
        <TouchableOpacity style={style.cardStyle} onPress={() => props.navigateToChatScreen(props.item)}>

            <Image style={style.image} source={{ uri: props.item.dp }} />
            <View style={style.textContainer}>
                <View>
                    <Text style={style.name}>{props.item.name}</Text>
                    <Text style={style.lastMsg}>{props.item.lastMsg}</Text>
                </View>
                <View style={style.info}>
                    <Text style={[
                        style.stamp,
                        { color: props.item.countUnRead > 0 ? '#81d161' : '#808080' },
                        { fontWeight: props.item.countUnRead > 0 ? 'bold' : '100' },]}>{props.item.stamp}</Text>
                    {props.item.countUnRead > 0 ?
                        <View style={style.countUnReadContainer}>
                            <Text style={style.countUnRead}>{props.item.countUnRead}</Text>
                        </View> :
                        null
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create(
    {
        cardStyle: {
            flexDirection: 'row',
            padding: 15,
        },
        image: {
            width: 46,
            height: 46,
            borderRadius: 23,
        },
        textContainer: {
            flex: 1,
            marginLeft: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
        },
        info: {
            position: 'absolute',
            right: 0,
        },
        name: {
            fontWeight: 'bold',
        },
        lastMsg: {
            fontSize: 12,
        },
        stamp: {
            fontSize: 11,
            marginBottom: 5,
        },
        countUnReadContainer: {
            alignSelf: 'flex-end',
            width: 15,
            height: 15,
            borderRadius: 7.5,
            backgroundColor: '#81d161',
        },
        countUnRead: {
            textAlign: 'center',
            fontSize: 9,
            color: '#FFFFFF',
        }
    }
)

export default Chats;