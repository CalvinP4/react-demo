export default function EmojiButton({btnImage}) {
    return (
        <button>
            <img 
                src={btnImage}
                width={100}
                height={100}
                alt="Emoji button"
            />
        </button>
    );
}