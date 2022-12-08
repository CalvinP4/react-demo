export default function Display(props) {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <h1 style={{ color: props.textColor }}>{props.text}</h1>
    </div>
  );
}
