import React, { Children, useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Dimensions, Text } from "react-native";
interface AnimatedTextProps {
  children: JSX.Element;
  index: number;
  numberOfItens: number;
}

export default function AnimatedItem({
  children,
  index,
  numberOfItens,
}: AnimatedTextProps) {
  const { width } = Dimensions.get("window");
  const translateX = useSharedValue(-100);
  const duration = 6000;
  const timeoutToStart = (duration / numberOfItens) * index;

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withRepeat(
        withTiming(width, {
          duration: duration,
          easing: Easing.linear,
        }),
        -1
      );
    }, timeoutToStart);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: "absolute",
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
