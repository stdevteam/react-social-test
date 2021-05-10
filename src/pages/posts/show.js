import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import PostDetail from "../../components/postsPage/post/show";
import {request} from "../../utils/request";
import PostCommentForm from "../../components/postsPage/forms/comment";

export default function PostShow() {
  const {post_id} = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const comments = await request(`${'/comment/' + post_id + '/'}`);
      if(comments) setData(comments)
    })()
  }, []);

  const addComment = (comment) => {
    setData([...data, comment]);
  }

  return (
    <div className='comments'>
      <PostCommentForm post_id={post_id} addComment={addComment} />
      {data.map(comment => {
        return <PostDetail data={comment} key={comment.id}/>
      })}
    </div>
  )
}
