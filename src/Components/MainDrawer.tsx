import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "../Screens/Main";
import User from "../Screens/User";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="User" component={User} />
        </Drawer.Navigator>
    )
}

export default MainDrawer;