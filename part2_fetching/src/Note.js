
export const Note = ({id, title, body}) => {
    return (
      <li id={id}>
          <p>{title}</p>
          <small>{body}</small>
      </li>
    );
};
