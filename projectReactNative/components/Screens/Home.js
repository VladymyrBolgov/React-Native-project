import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PostsScreen from './mainScreen/PostsScreen';
import ProfileScreen from './mainScreen/ProfileScreen';
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";

const MainTab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <MainTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}>
            <MainTab.Screen
                options={{
                    title: "Публикации",
                    headerRight: () => (
                        <TouchableOpacity style={styles.headerRightBtn} onPress={()=> navigation.navigate('Login')}>
                            <Feather name="log-out" size={24} color="#BDBDBD" />
                        </TouchableOpacity>                        
                    ),
                    tabBarIcon: () => (<Ionicons name="grid-outline" size={24} color="#212121cc" />)
                }}
                name='Posts'
                component={PostsScreen}
            />
            <MainTab.Screen
                options={{
                    title: "Создать публикацию ",
                    headerLeft: () => (
                        <TouchableOpacity style={styles.headerLeftBtn} onPress={()=> navigation.navigate('Posts')}>
                            <Ionicons name="arrow-back" size={24} color="#212121cc" />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: () => (
                        <View style={styles.iconContainer}>
                            <AntDesign name="plus" size={20} color="#FFFFFF" />
                        </View>)
                }}
                name='Create'
                component={CreatePostsScreen}
            />
            <MainTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<Feather name="user" size={24} color="#212121cc" />)
                }}
                name='Profile'
                component={ProfileScreen} />
        </MainTab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FF6C00',
        borderRadius: 20,

    },
    headerRightBtn: {
        marginRight: 16,
    },
    headerLeftBtn: {
        marginLeft: 16,
    }
})
export default HomeScreen;
