import { TouchableOpacity, Image } from "react-native";

export default function EmojiButton() {
  return (
    <TouchableOpacity>
      <Image
        source={require("../../assets/laugh.png")}
        style={{ width: 100, height: 100 }}
      />
    </TouchableOpacity>
  );
}
