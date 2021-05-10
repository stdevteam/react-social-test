import {useState} from 'react'
import {Link} from "react-router-dom";
import {request} from "../../../utils/request"

export default function PostCommentForm(data) {
  const [values, setValues] = useState({
    post_id: data.post_id,
    comment: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleCommentInputChange = event => {
    setValues({...values, comment: event.target.value})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.comment) return;
    const resp = await request('/comment/', 'POST', values)
    if (resp) {
      setSuccessMessage(true);
      data.addComment(resp);
      setValues({
        comment: '',
        post_id: values.post_id
      })
    }
  }

  return (
    <form className={"postForm"} onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment</label>
        <textarea
          value={values?.comment}
          rows='7'
          onChange={handleCommentInputChange}>
        </textarea>
      </div>
      {successMessage && <span>Success</span>}
      <div className="form-group">
        <button>Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}
