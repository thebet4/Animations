import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { mix } from "react-native-redash";
import { Card, Cards } from "../../components/Card";

interface AnimatedCardProps {
  card: Cards;
  transition: any;
  index: number;
}

const origin = -Dimensions.get("window").width * 0.5;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});

export default function AnimatedCard({
  card,
  transition,
  index,
}: AnimatedCardProps) {
  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6);
    return {
      transform: [
        { translateX: origin },
        { rotate: `${rotate}rad` },
        { translateX: -origin },
      ],
    };
  });

  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Card {...{ card }} />
    </Animated.View>
  );
}
