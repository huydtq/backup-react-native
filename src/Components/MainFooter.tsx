import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../Screens/Home";
import Keyboard from "../Screens/Keyboard";
import Market from "../Screens/Market";

const Tab = createBottomTabNavigator();

const MainFooter = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Keyboard"
                component={Keyboard}
                options={{
                    tabBarLabel: 'Keyboard',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="keyboard" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarLabel: 'Market',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainFooter;