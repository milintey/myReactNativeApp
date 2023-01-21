import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as DocumentPicker from "expo-document-picker";

SplashScreen.preventAutoHideAsync();

const initialState = {
  avatar: "../images/Rectangle 22.jpg",
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen({ navigation }) {
  console.log(navigation);
  const [state, setState] = useState(initialState);

  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#F6F6F6");
  const [inputBorderColor2, setInputBorderColor2] = useState("#E8E8E8");
  const [inputBackgroundColor2, setInputBackgroundColor2] = useState("#F6F6F6");
  const [inputBorderColor3, setInputBorderColor3] = useState("#E8E8E8");
  const [inputBackgroundColor3, setInputBackgroundColor3] = useState("#F6F6F6");

  const onFocusInput = () => {
    setInputBorderColor("#FF6C00");
    setInputBackgroundColor("#fff");
  };

  const onBlurInput = () => {
    setInputBorderColor("#E8E8E8");
    setInputBackgroundColor("#F6F6F6");
  };

  const onFocusInput2 = () => {
    setInputBorderColor2("#FF6C00");
    setInputBackgroundColor2("#fff");
  };

  const onBlurInput2 = () => {
    setInputBorderColor2("#E8E8E8");
    setInputBackgroundColor2("#F6F6F6");
  };

  const onFocusInput3 = () => {
    setInputBorderColor3("#FF6C00");
    setInputBackgroundColor3("#fff");
  };

  const onBlurInput3 = () => {
    setInputBorderColor3("#E8E8E8");
    setInputBackgroundColor3("#F6F6F6");
  };

  const submitForm = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const UploadFile = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    setState((prevState) => ({ ...prevState, avatar: result.uri }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../images/Photo-BG.jpg")}
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
            <Text style={styles.formTitle}>Регистрация</Text>

            <View style={styles.form}>
              <View style={{ marginBottom: 16, marginTop: 33 }}>
                <TextInput
                  style={{
                    borderColor: inputBorderColor,
                    backgroundColor: inputBackgroundColor,
                    ...styles.input,
                  }}
                  placeholder={"Логин"}
                  placeholderTextColor="#BDBDBD"
                  onFocus={onFocusInput}
                  onBlur={onBlurInput}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={{
                    borderColor: inputBorderColor2,
                    backgroundColor: inputBackgroundColor2,
                    ...styles.input,
                  }}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor="#BDBDBD"
                  onFocus={onFocusInput2}
                  onBlur={onBlurInput2}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  style={{
                    borderColor: inputBorderColor3,
                    backgroundColor: inputBackgroundColor3,
                    ...styles.input,
                  }}
                  placeholder={"Пароль"}
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={true}
                  onFocus={onFocusInput3}
                  onBlur={onBlurInput3}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                onPress={submitForm}
                activeOpacity={0.7}
                style={styles.btn}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textAccaunt}>
              Уже есть аккаунт?{" "}
              <Text
                onPress={() => navigation.navigate("Login")}
                style={styles.navLogin}
              >
                Войти
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  view: {
    height: 549,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  formTitle: {
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginTop: 92,
    color: "#212121",
  },
  form: {},
  input: {
    marginHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    // borderColor: "#E8E8E8",
    // backgroundColor: "#F6F6F6",
    paddingLeft: 16,
  },
  btn: {
    marginHorizontal: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  textAccaunt: {
    marginRight: "auto",
    marginLeft: "auto",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 16,
  },
  avatarView: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "relative",
    top: 60,
    zIndex: 100,
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
  navLogin: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
