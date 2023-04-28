import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity, Button } from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { DefaultScreen } from "./Screens/mainScreen/DefaultScreen";
import { CreatePostsScreen } from "./Screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./Screens/mainScreen/ProfileScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Gridd from "./svg/grid.svg";
// import Grid from "./svg/grid.jpg";

import AddPost from "./svg/add.svg";
import NewPostScreen from "./svg/new.svg";
import UserScreenActive from "./svg/userActive.svg";
import UserScreenDefault from "./svg/user.svg";
import PostScreenActive from "./svg/Posts.svg";
import Exit from "./svg/log-out.svg";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
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
      initialRouteName="DefaultScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 90,
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Default Screen"
        component={DefaultScreen}
        options={{
          tabBarIconStyle: {
            marginTop: 9,
            marginLeft: 80,
          },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <PostScreenActive /> : <Gridd />,
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a button!")}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIconStyle: {
            marginTop: 9,
          },
          tabBarIcon: ({ focused }) =>
            focused ? <NewPostScreen /> : <AddPost />,
          // tabBarButton: (props) => <TouchableOpacity {...props} />,
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a button!")}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIconStyle: {
            marginTop: 9,
            marginRight: 80,
          },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <UserScreenActive /> : <UserScreenDefault />,
        }}
      />
    </Tabs.Navigator>
  );
};
