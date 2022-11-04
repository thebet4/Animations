import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import { Card, Cards } from "../../components/Card";

export default function PanGesture() {
  const { width, height } = Dimensions.get("screen");
  const boundX = width - 300;
  const boundY = height - 200;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: (event) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
