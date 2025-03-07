const style = {
  width: "380px",
  padding: "10px",
  margin: "10px 10px 10px 10px",
  backgroundColor: "aquamarine",
  borderRadius: "0.2cm"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
      disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};
