import * as React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';

export default class AddSurvey extends React.Component{
    static navigationOptions = {
        title:'Tilføj Survey',
    };

    render = () => {
        const {navigation} = this.props;

        return (
            <View>
                <Text>
                    You can add a survey here
                </Text>
                <Button style = {styles.button} title="Gem" onPress={() => navigation.navigate('HomePage')}/>
            </View>
        );
    };
}