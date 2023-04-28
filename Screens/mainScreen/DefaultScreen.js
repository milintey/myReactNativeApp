import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../nestedScreens/PostsScreen";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { View } from "react-native-web";

import BackIcon from "../../svg/arrow-left.svg";
import Exit from "../../svg/log-out.svg";

const NestedScreen = createStackNavigator();

export const DefaultScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <Exit
              style={{ marginRight: 18 }}
              onPress={() => alert("This is a button!")}
            />
          ),
          // headerLeft: () => <Exit />,
        }}
      />
      <NestedScreen.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          headerLeft: () => (
            <BackIcon
              style={{ marginLeft: 18 }}
              onPress={() => navigation.navigate("Публикации")}
            />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Карта"
        component={MapScreen}
        options={{
          headerLeft: () => (
            <BackIcon
              style={{ marginLeft: 18 }}
              onPress={() => navigation.navigate("Публикации")}
            />
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};
