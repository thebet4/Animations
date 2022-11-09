import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AnimatedItem from "./AnimatedItem";

export default function AutoScroll() {
  const numberOfItens = 6;
  const item = <Text style={{ color: "white" }}>CINE JOIA</Text>;
  const [itens, setItens] = useState<JSX.Element[]>();

  useEffect(() => {
    for (let index = 0; index < numberOfItens; index++) {
      setItens((prev) => [...(prev || []), item]);
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: "black",
          height: 30,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {itens?.map((item, index) => {
          return (
            <AnimatedItem
              index={index}
              children={item}
              numberOfItens={numberOfItens}
            />
          );
        })}
      </View>
    </View>
  );
}
