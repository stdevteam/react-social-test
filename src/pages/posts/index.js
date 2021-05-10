import {useEffect, useState} from 'react'
import {request} from "../../utils/request"
import Post from "../../components/postsPage/post"
import {Link} from "react-router-dom";

export default function PostPage() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async () => {
      const posts = await request("/posts/");
      setPosts(posts || []);
    })()
  }, []);

  return (
    <div>
      <div>
        <Link to="/posts/create">
          <button>Create Post</button>
        </Link>
      </div>

      <div>
        {posts.map(post => {
          return <Post props={post} key={post.id}/>
        })}
      </div>
    </div>
  )
}
