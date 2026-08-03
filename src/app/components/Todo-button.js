export const TodoButton = (props) => {
  return (
    <button
      className="button"
      onClick={props.onClick}
      style={{
        backgroundColor:
          props.filterValue === props.text ? "#3cb2f6" : "#f3f4f6",
          color: props.filterValue === props.text ? "#fff" : "#000",
      }}
    >
      {props.text}
    </button>
  );
};
