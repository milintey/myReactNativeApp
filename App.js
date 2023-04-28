import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { useRoute } from "./routing";

export default function App() {
  const routing = useRoute(false);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
