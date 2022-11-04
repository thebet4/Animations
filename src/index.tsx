import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { StackNavigator } from "../App";

export default function AnimationsScreen({
  navigation,
}: NativeStackScreenProps<StackNavigator, "Home">) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pan")}
        style={styles.Button}
      >
        <Text>PanGesture</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Transitions")}
        style={styles.Button}
      >
        <Text>Transition</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
  },
  Button: {
    width: "100%",
    height: 50,
    marginVertical: 4,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#aaaaff",
    justifyContent: "center",
    alignItems: "center",
  },
});
