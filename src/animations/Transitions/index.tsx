import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";
import { cards, Cards } from "../../components/Card";
import AnimatedCard from "./AnimatedCard";

type AnimatedCardProps = {
  card: Cards;
  toggled: boolean;
  index: number;
};

const useTiming = (state: boolean | number, config?: WithTimingConfig) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withTiming(value.value, config);
  });
};

const useSpring = (state: boolean | number, config?: WithSpringConfig) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [value, state]);

  return useDerivedValue(() => {
    return withSpring(value.value, config);
  });
};

export default function Transitions() {
  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);

  useEffect(() => setToggle(true), []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => setToggle((prev) => !prev)}>
        {cards.slice(0, 3).map((card, index) => (
          <AnimatedCard key={card} {...{ index, card, transition }} />
        ))}
      </TouchableOpacity>
    </View>
  );
}
