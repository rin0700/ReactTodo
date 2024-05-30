const todoCompleteStyle = {
  width: "400px",
  height: "auto",
  margin: "10px 10px 10px 10px",
  border: "2px solid #15c863",
  borderRadius: "0.2cm"
};

const headerStyle = {
  textAlign: "center"
};

const todoStyle = {
  display: "flex",
  alignItems: "center"
};

export const IncompleteTodos = (props) => {
  const { onClickComplete, onClickDelete, incompleteTodos } = props;
  return (
    <div style={todoCompleteStyle}>
      <p style={headerStyle}>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={todo}>
            <div style={todoStyle}>
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
