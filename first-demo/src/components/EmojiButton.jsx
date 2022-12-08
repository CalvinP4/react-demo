export default function EmojiButton({btnImage}) {

    const printHello = () => {
        console.log("Hello");
    }


    return (
        <button
            onClick={printHello}
        >
            <img 
                src={btnImage}
                width={100}
                height={100}
                alt="Emoji button"
            />
        </button>
    );
}