import './App.css';
import {useEffect, useState} from 'react'
import {request} from "./utils/request"
import Post from "./components/post/index"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async () => {
      const posts = await request("/posts/");
      setPosts(posts);
    })()
  }, []);

  return (
    <div>
      {posts.map(post => {
        return <Post props={post}/>
      })}
    </div>
  );
}

export default App;
