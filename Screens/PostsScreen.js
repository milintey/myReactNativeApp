import { StyleSheet, View, Text } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
