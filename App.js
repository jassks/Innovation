import React from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';

import LoginForm from './Components/LoginForm';
import SignUpFrom from './Components/SignUpForm';
import HomePage from './Components/HomePage';
import AddSurvey from './Components/AddSurvey';
import MyProfile from './Components/MyProfile';
import MySurveys from './Components/MySurveys';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const stackNavigator = createStackNavigator (
  {
    HomePage: { screen: HomePage},
    AddSurvey: { screen: AddSurvey},
    MySurveys: { screen: MySurveys},
    MyProfile: { screen: MyProfile}
  },
  {
    initialRouteName: 'HomePage',
    navigationOptions: {
      title: 'Home',
    }
  }
);

const TabNavigator = createBottomTabNavigator (
  {
    HomePage: stackNavigator,
    MyProfile: MyProfile,
  },
  { tabBarOptions: {labelStyle: {fontSize: 24} } }
);

const MainAppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  componentWillMount () {
    const firebaseConfig = {
      apiKey: "AIzaSyAMsZMnZs-J-fcRCgGi0t8207Ph04wVVUQ",
      authDomain: "paymentrates.firebaseapp.com",
      databaseURL: "https://paymentrates.firebaseio.com",
      projectId: "paymentrates",
      storageBucket: "paymentrates.appspot.com",
      messagingSenderId: "248804855760",
      appId: "1:248804855760:web:0c422289de5b792a6df3d5",
      measurementId: "G-T1LLQX1D4Q"
    };

    if (firebase.apps.length ===0) {
      firebase.initializeApp (firebaseConfig);
    }

    this.authStateChangeUnsubscribe = firebase.auth().onAuthStateChanged (user => { console.log('onAuthStateChanged', {U: user});
  
    this.setState({user});
    });
  }

  componentWillUnmount() {
    this.authStateChangeUnsubscribe && 
    this.authStateChangeUnsubscribe();
  }

  authStateChangeUnsubscribe = null;

  state = {
    user: null,
  };

  handleLogout = async () => {
    await firebase.auth().signOut();
  };

  renderLoginSignup = () => {
    const {user} = this.state;

    if (user) {
      return null;
    }
    return (
      <ScrollView>
        <LoginForm/>
        <SignUpFrom/>
      </ScrollView>
    );
  };

  renderCurrentUser = () => {
    const {user} = this.state;

    if(!user){
      return null;
    } else if (user) {
      return <MainAppContainer/>;
    }

  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLoginSignup()}
        {this.renderCurrentUser()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});