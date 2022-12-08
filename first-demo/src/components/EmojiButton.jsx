export default function EmojiButton({ btnImage, onClick }) {
  return (
    <button onClick={onClick}>
      <img src={btnImage} width={100} height={100} alt="Emoji button" />
    </button>
  );
}
