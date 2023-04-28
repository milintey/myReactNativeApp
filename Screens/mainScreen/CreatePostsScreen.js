import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Delete from "../../svg/Delete.svg";
import PhotoCamera from "../../svg/Camera.svg";
import MapPin from "../../svg/map-pin.svg";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [namePhoto, setNamePhoto] = useState("");
  const [terrain, setTerrain] = useState("");
  const [locationPhoto, setLocationPhoto] = useState({});
  // console.log(namePhoto);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    let location = await Location.getCurrentPositionAsync({});
    console.log("location", location);
    setLocationPhoto(location);
    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    navigation.navigate("Публикации", {
      photo,
      namePhoto,
      terrain,
      locationPhoto,
    });
    setNamePhoto("");
    setTerrain("");
    setPhoto(null);
  };

  const deletePost = () => {
    setPhoto(null);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.containerPhoto}>
              <Image source={{ uri: photo }} style={styles.photo} />
            </View>
          )}

          <TouchableOpacity
            style={styles.cameraBtn}
            onPress={takePhoto}
            activeOpacity={0.7}
          >
            <PhotoCamera />
          </TouchableOpacity>
        </Camera>
        {photo ? (
          <Text onPress={deletePost} style={styles.text}>
            Редактировать фото
          </Text>
        ) : (
          <Text style={styles.text}>Загрузите фото</Text>
        )}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
            value={namePhoto}
            onChangeText={setNamePhoto}
          />
          <TextInput
            style={styles.input}
            placeholder="Местность..."
            placeholderTextColor="#BDBDBD"
            value={terrain}
            onChangeText={setTerrain}
          />

          {photo && namePhoto && terrain ? (
            <TouchableOpacity
              style={styles.postBtnActive}
              activeOpacity={0.7}
              onPress={sendPhoto}
            >
              <Text style={styles.postBtnTitleActive}>Опубликовать</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.postBtn} activeOpacity={1}>
              <Text style={styles.postBtnTitle}>Опубликовать</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={styles.deletePostBtn}
          activeOpacity={0.7}
          onPress={deletePost}
        >
          <Delete />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  camera: {
    backgroundColor: "#F6F6F6",

    height: 240,
    // width: 343,
    marginHorizontal: 16,
    marginTop: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",

    alignItems: "center",
    justifyContent: "center",
  },
  cameraBtn: {
    // position: "relative",
    zIndex: 100,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 8,
    marginLeft: 16,
    color: "#BDBDBD",

    fontSize: 16,
    // fontStyle: "Roboto",
  },
  input: {
    marginHorizontal: 16,
    marginTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,

    fontSize: 16,
  },
  postBtn: {
    height: 51,
    marginHorizontal: 16,
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnTitle: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  postBtnActive: {
    height: 51,
    marginHorizontal: 16,
    marginTop: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnTitleActive: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  photo: {
    height: 230,
    width: 343,

    // // top: 32,
    // borderRadius: 30,
    // borderEndWidth: 3,
    // borderColor: "#FFFFFF",
    // backgroundColor: "#F6F6F6",
    // opacity: 0.4,
    // position: "absolute",
    // zIndex: 50,
  },
  deletePostBtn: {
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
    marginRight: "auto",
    marginLeft: "auto",
  },
  containerPhoto: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#F6F6F6",
  },
});
