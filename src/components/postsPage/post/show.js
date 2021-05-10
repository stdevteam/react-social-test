export default function PostDetail({data}) {
  const {comment} = data;

  return (
    <div className={"comment"}>
      {comment}
    </div>
  )
}
