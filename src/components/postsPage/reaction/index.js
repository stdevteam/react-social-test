import {request} from "../../../utils/request"

export default function Reaction(props) {
  const {post_id, addLike} = props;

  const like = 1
  const heart = 2

  const handleLikeButton = async () => {
    // TODO implement like types
    const resp = await request('/react/', "POST", {post_id, reaction_type: like})
    if(!resp.error) addLike();
  }

  return (
    <div className={"reaction"}>
      <button
      onClick={handleLikeButton}>
        Like
      </button>
    </div>
  )
}
