const headerStyle = {
  textAlign: "center"
};

const todoStyle = {
  display: "flex",
  alignItems: "center"
};

const todoIncompleteStyle = {
    width: "400px",
    height: "auto",
    margin: "10px",
    border: "2px solid #15c863",
    borderRadius: "0.2cm"
}

export const TodoComplete = (props) => {
  const {onClickBack, completeTodos} = props
  return (
    <div style={todoIncompleteStyle}>
        <p style={headerStyle}>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div style={todoStyle}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}