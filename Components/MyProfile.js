import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';

export default class MyProfile extends React.Component {
    static navigationOptions = {
        title: 'My Profile',
    };

    

    render() {
        
        const {navigation} = this.props;

        

        return (
            <View style={styles.screen}>
                
                <Button 
                    style={styles.button} 
                    title="Se mine Surveys" 
                    onPress={() => navigation.navigate('MySurveys')}/>
               
            </View>
        );
    }
}