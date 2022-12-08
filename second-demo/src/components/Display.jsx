import { View, Text } from "react-native";

export default function Display({ text, backgroundColor, textColor }) {
  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
}
