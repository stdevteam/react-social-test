import {useState} from "react";
import {Link} from "react-router-dom";
import Reaction from "../reaction";
import {request} from "../../../utils/request"
import "./style.css"

export default function Post({props, removePost}) {
  const {id, title, text, count} = props;
  const [countLikes, setCountLikes] = useState(count)

  const addLike = () => {
    setCountLikes(countLikes + 1)
  };

  const deletePost = async () => {
    const resp = await request('/posts/' + id + '/', "DELETE");
    if(resp) removePost(id);
  }

  return (
    <div className={"post"}>
      <button className='delete-post' onClick={deletePost}>X</button>
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
