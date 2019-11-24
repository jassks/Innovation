import * as React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';

export default class MySurveys extends React.Component{
    static navigationOptions = {
        title:'MySurveys',
    };

    render = () => {
        const {navigation} = this.props;
        
        return (
            <View style={styles.screen}>
                <Text>
                    Du kan se dine surveys her
                </Text>
                <Button style = {styles.button} title="Back" onPress={() => navigation.navigate('MyProfile')}/>
            </View>
        );
    };
}

