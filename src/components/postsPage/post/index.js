import {useState} from "react";
import {Link} from "react-router-dom";
import Reaction from "../reaction";
import "./style.css"

export default function Post(props) {
  const {id, title, text, count} = props.props;

  const [countLikes, setCountLikes] = useState(count)

  const addLike = () => {
    setCountLikes(countLikes + 1)
  };

  return (
    <div className={"post"}>
      <Link to={'post/' + id + '/'}>
        <h3>{title}</h3>
      </Link>
      <p>{text}</p>
      <p>Reactions :{countLikes}</p>
      <Reaction post_id={id} count={count} addLike={addLike}/>
      <Link to={'/posts/update/' + id}>
        <button>Edit</button>
      </Link>
    </div>
  )
}
