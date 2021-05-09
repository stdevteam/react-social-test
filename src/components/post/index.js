import {Link} from "react-router-dom";

export default function Post(props) {
  const {id, title, text, count} = props.props;

  return (
    <div className={"post"}>
      <Link to={'post/' + id + '/'}>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>Reactions :{count}</p>
      </Link>
    </div>
  )
}
