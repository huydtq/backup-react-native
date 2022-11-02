import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Login = () => {
    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    )
}

const Signup = () => {
    return (
        <View>
            <Text>Signup Screen</Text>
        </View>
    )
}

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}