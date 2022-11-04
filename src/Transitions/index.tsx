import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Transitions() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.Card}>
        <TouchableOpacity style={styles.CardButton}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    width: 300,
    height: 400,
    borderRadius: 24,
    paddingBottom: 24,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  CardButton: {
    backgroundColor: "#ddd",
    width: "80%",
    alignSelf: "center",
    height: 60,
    borderRadius: 24,
  },
});
