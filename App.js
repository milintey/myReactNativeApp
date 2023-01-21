import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./routing";

export default function App() {
  const routing = useRoute({});
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
