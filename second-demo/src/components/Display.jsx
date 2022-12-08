import { View, Text } from "react-native";

export default function Display({ text, backgroundColor, textColor }) {
  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text style={{ color: textColor, fontSize: 40 }}>{text}</Text>
    </View>
  );
}
