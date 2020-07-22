/* eslint-disable */
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

class Calls extends React.Component {
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

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <SearchBar
                        value={this.state.text}
                        placeholder="Search Calls..."
                        lightTheme
                        onChangeText={text => this.searchFilterFunction(text)}
                        autoCorrect={false}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Item item={item} />}
                    />
                </View>
            </>
        )
    }
}

function Item(props) {
    return (
        <View style={style.cardStyle}>
            <Image style={style.image} source={{ uri: props.item.dp }} />
            <View style={style.textContainer}>
                <View>
                    <Text style={style.name}>{props.item.name}</Text>
                    <View style={style.time}>
                        <Image style={style.returnIcon} source={require('../return.png')} />
                        <Text style={style.stamp}>{props.item.stamp}</Text>

                    </View>
                </View>
                <Image style={style.phoneIcon} source={require('../phone-call.png')} />
            </View>
        </View>
    );
}


const style = StyleSheet.create(
    {
        cardStyle: {
            flexDirection: 'row',
            padding: 15,
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        name: {
            fontWeight: 'bold',
        },
        textContainer: {
            flex: 1,
            marginLeft: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
        },
        time: {
            flexDirection: 'row',
            alignContent: 'center',
        },
        stamp: {
            alignSelf: 'center',
            fontSize: 11,
            fontWeight: '500',
            color: '#808080',
        },
        returnIcon: {
            width: 20,
            height: 20,
            marginRight: 10,
        },
        phoneIcon: {
            position: 'absolute',
            right: 0,
            width: 16,
            height: 16,
            alignSelf: 'center',
        },
    }
)

export default Calls;