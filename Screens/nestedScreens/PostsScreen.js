import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Comment from "../../svg/Shape.svg";

export const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);
  console.log("navigation", navigation);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      return;
    }
  }, [route.params]);

  console.log(posts);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userAvatar}></View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Image style={styles.postPhoto} source={{ uri: item.photo }} />
              <Text style={styles.postName}>{item.namePhoto}</Text>
              <View style={styles.postInfo}>
                <Comment
                  width={18}
                  height={18}
                  onPress={() => navigation.navigate("Комментарии")}
                />
                <Text
                  style={styles.postLocation}
                  onPress={() => navigation.navigate("Карта")}
                >
                  {item.terrain}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // flexDirection: "row",
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#212121",
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 32,
    // justifyContent: "center",
    // alignItems: "center",
  },
  userInfo: {
    marginLeft: 8,
    justifyContent: "center",
    height: 60,
  },
  userName: {
    fontSize: 13,
  },
  userEmail: {
    fontSize: 11,
  },
  postPhoto: {
    // width: 343,
    marginHorizontal: 16,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postName: {
    marginHorizontal: 16,
    fontSize: 16,
    marginBottom: 11,
  },
  postContainer: {
    marginBottom: 34,
  },
  postInfo: {
    // display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 16,
  },
  comment: {
    borderColor: "red",
  },
});
