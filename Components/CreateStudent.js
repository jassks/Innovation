import * as React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';

export default class CreateStudent extends React.Component{
    static navigationOptions = {
        title:'Create Student',
    };

    render = () => {
        const {navigation} = this.props;

        return (
            <View>
                <Text>
                    You can create a student here
                </Text>
                <Button style = {styles.button} title="Back" onPress={() => navigation.navigate('HomePage')}/>
            </View>
        );
    };
}