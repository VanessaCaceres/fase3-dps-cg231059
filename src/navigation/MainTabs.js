import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../theme";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <HomeStack.Screen name="Principal" component={HomeScreen} />
      <HomeStack.Screen name="Detalle" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={route.name === "Inicio" ? "home" : "person"} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}
