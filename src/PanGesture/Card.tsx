import React from "react";

import { Dimensions, View } from "react-native";

type CardProps = {
  color: string;
};

export default function Card({ color = "#f00" }: CardProps) {
  return (
    <View
      style={{
        width: 300,
        height: 200,
        backgroundColor: color,
        borderRadius: 24,
      }}
    ></View>
  );
}
