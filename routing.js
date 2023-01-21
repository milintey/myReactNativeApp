import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { Post } from "./svg/grid.svg"

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{ tabBarShowLabel: false, headerTitleAlign: "center" }}
    >
      <Tabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="pluscircleo" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerStyle: {
            fontSize: 40,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
