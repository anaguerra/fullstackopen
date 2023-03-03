
export const Note = ({categories = [], id, content, date}) => {
    return (
      <li id={id} >
          <p>{content}</p>
          <small><time>{date}</time></small>
          {categories.map((category) => <small key={category}>{category}</small>)}
      </li>
    );
};
