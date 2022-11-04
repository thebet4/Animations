import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimationsScreen from "./src";
import PanGesture from "./src/animations/PanGesture";
import Transitions from "./src/animations/Transitions";

export type StackNavigator = {
  Home: undefined;
  Pan: undefined;
  Transitions: undefined;
};
const Stack = createNativeStackNavigator<StackNavigator>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AnimationsScreen} />
        <Stack.Screen name="Pan" component={PanGesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
