import {useState} from 'react'
import {Link} from "react-router-dom";
import {request} from "../../../utils/request"

export default function PostForm() {
  const [values, setValues] = useState({
    title: "",
    text: ""
  });

  const handleTitleInputChange = event => {
    setValues({...values, title: event.target.value})
  };

  const handleTextInputChange = event => {
    setValues({...values, text: event.target.value})
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values)
    const resp = request('/posts/', "POST", values)
  }

  return (
    <form className={"postForm"} onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={values.title}
          onChange={handleTitleInputChange} />
      </div>
      <div>
        <label>Text</label>
        <textarea
          value={values.text}
          onChange={handleTextInputChange}>
        </textarea>
      </div>
      <div>
        <button>Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}
