import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Create from "../../components/postsPage/forms/create"
import {request} from "../../utils/request";

export default function PostUpdate(props) {
  const {post_id} = useParams()
  const [data, setData] = useState({
    id: '',
    title: '',
    text: ''
  })

  useEffect(() => {
    (async () => {
      const post = await request(`${'/posts/' + post_id}`);
      if(!post.error) setData(post)
    })()
  }, []);

  return (
    <Create data={data}/>
  )
}
