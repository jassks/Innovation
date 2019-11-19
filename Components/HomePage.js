import * as React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';

export default class HomePage extends React.Component{
    static navigationOptions = {
        title:'Home',
    };

    render = () => {
        const {navigation} = this.props;

        return (
            <View style={styles.screen}>
                <Button 
                    style={styles.button} 
                    title="Create Student" 
                    onPress={() => navigation.navigate('CreateStudent')}/>
            </View>
        );
    };
}