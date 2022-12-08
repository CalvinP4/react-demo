import { TouchableOpacity, Image } from "react-native";

export default function EmojiButton(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
    >
      <Image
        source={props.imgPath}
        style={{ width: 100, height: 100 }}
      />
    </TouchableOpacity>
  );
}
