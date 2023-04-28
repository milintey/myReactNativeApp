import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import LogOut from "../../svg/log-out.svg";

const initialState = {
  avatar: "../../images/Rectangle 22.jpg",
};

export const ProfileScreen = () => {
  const [state, setState] = useState(initialState);

  const UploadFile = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    setState((prevState) => ({ ...prevState, avatar: result.uri }));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../images/Photo-BG.jpg")}
      >
        <View style={styles.avatarView}>
          <Image
            style={styles.avatarImg}
            source={{
              uri: state.avatar,
            }}
          />
          <TouchableOpacity
            onPress={UploadFile}
            activeOpacity={0.7}
            style={styles.avatarBtn}
          >
            <Text style={styles.avatarBtnTitle}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <LogOut style={styles.logOut} />

          <Text style={styles.avatarName}>Natali Romanova</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "center",
    alignItems: "center",
    // paddingTop: 200,
  },
  view: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 147,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  avatarView: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: 87,
    zIndex: 1,
    borderRadius: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  avatarBtn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 107,
    bottom: 39,
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarBtnTitle: {
    color: "#FF6C00",
  },
  logOut: {
    marginLeft: "auto",
    marginTop: 24,
    marginRight: 19,
  },
  avatarName: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    marginTop: 32,
  },
});
