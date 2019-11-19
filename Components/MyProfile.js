import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

export default class MyProfile extends React.Component {
    static navigationOptions = {
        title: 'My Profile',
    };

    state = {
        user: null,
    }

    componentDidMount = () => {
        const user = firebase.auth().currentUser;
        this.setState({user});
    };

    handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    render() {
        const {user} = this.state;

        if(!user){
            return null;
        }

        return (
            <View>
                <Text> Current user: {user.email} </Text>
                <Button onPress={this.handleLogOut} title="Log out" />
            </View>
        );
    }
}